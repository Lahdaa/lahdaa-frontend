import React, { useState, useEffect } from "react";
import { Button } from "components/atoms/Button";
import Typography from "components/atoms/Typography";
import {
  Input,
  Textarea,
  Select,
  CustomeFile,
  Radio,
} from "components/molecules/FormInputs";
import { FormCardLayout, Container, Section } from "./style";
import Notiflix from "notiflix";
import { applyAsInstructor } from "services/instructorService";
import { useHelper } from "store/helper";

const Form = () => {
  // State
  const [loading, setLoading] = useState(false);

  // Store
  const {
    courseCategoriesMapped,
    getCoursesCategory,
    getCountries,
    countriesMapped,
  } = useHelper();

  // Handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    Notiflix.Notify.init({ position: "right-top" });
    let error = false;

    const contactForm: any = document.getElementById(
      "instructor-application-form"
    );

    const data = new FormData();
    const formData: any = new FormData(contactForm);

    for (const el of formData.entries()) {
      const [key, value] = el;
      // data[key] = value;
      data.append(key, value);

      if (!value) {
        error = true;
        setLoading(false);

        Notiflix.Notify.failure("All fields are compulsory");
        break;
      }
    }

    if (error) return;

    try {
      const res = await applyAsInstructor(data);
      Notiflix.Notify.success("Application submitted successfully");
      contactForm.reset();
      setLoading(false);
    } catch (error) {
      Notiflix.Notify.failure("Please try again");
      setLoading(false);
    }
    setLoading(false);
  };

  // Effect
  useEffect(() => {
    getCoursesCategory();
    getCountries();
  }, []);

  //  Data to render
  return (
    <Section>
      <Container>
        <form onSubmit={handleSubmit} id="instructor-application-form">
          <FormCardLayout>
            <div className="form-labels">
              <Typography as="h5" className="heading-14">
                Personal information
              </Typography>
              <Typography as="P" className="paragraph-21">
                Tell us something about yourself
              </Typography>
            </div>
            <div className="form-inputs">
              <Input label="Full name" name="full_name" required />
              <Input label="Email Address" name="email" required />
            </div>
          </FormCardLayout>
          <FormCardLayout>
            <div className="form-labels">
              <Typography as="h5" className="heading-14">
                CV/Resume
              </Typography>
              <Typography as="P" className="paragraph-21">
                We accept PDF, DOC, DOCX, JPG and PNG files.
              </Typography>
            </div>
            <div className="form-inputs">
              <CustomeFile accept="application/*" name="resume" required />
            </div>
          </FormCardLayout>
          <FormCardLayout>
            <div className="form-labels">
              <Typography as="h5" className="heading-14">
                Tell us a little about you
              </Typography>
              <Typography as="P" className="paragraph-21">
                Insert your cover letter here
              </Typography>
            </div>
            <div className="form-inputs">
              <Textarea cols="10" rows="10" name="about_me" />
            </div>
          </FormCardLayout>
          <FormCardLayout>
            <div className="form-labels">
              <Typography as="h5" className="heading-14">
                Further Details
              </Typography>
              <Typography as="P" className="paragraph-21">
                Please fill in additional questions
              </Typography>
            </div>
            <div className="form-inputs">
              <Input
                label="Professional portfolio"
                name="professional_portfolio"
                required
              />
              <Input
                label="Other plattofrms (behance/dribble,etc)"
                name="other_platforms"
                required
              />
              <Input
                label="LinkedIn Profile"
                name="linkedin_profile_url"
                required
              />
              <Input label="Phone Number" name="phone_number" required />
              <Select
                label="Location"
                options={[
                  { name: "Select Country", value: "" },
                  ...countriesMapped,
                ]}
                name="country_id"
                required
              />
              <Select
                label="Choose your course category"
                options={[...courseCategoriesMapped]}
                name="course_category_id"
                required
              />
              <Input
                label="Do you have a minimum 5 - 10 hours per week available to dedicate to this role? When are you available to start?"
                name="availability"
                required
              />
              {/* <Input label="Why do you want to be an instructor?" required /> */}
              <Textarea
                label="Why do you want to be an instructor?"
                cols="10"
                rows="10"
                name="why_you_want_to_be_an_instructor"
                required
              />
              <Textarea
                label="What do you want to teach and who is your ideal student?"
                cols="10"
                rows="10"
                name="why_do_you_want_to_teach"
                required
              />
              <Radio
                label="Do you speak the English language fluently?"
                inputLabel="Yes"
                name="speak_english_frequently"
                className="mb-10"
                required
              />
              <Radio
                inputLabel="No"
                name="speak_english_frequently"
                className="mb-20"
                required
              />
              <Input
                label="Where did you hear about Stevia? e.g LinkedIn, word of mouth etc"
                name="where_did_you_hear_about_stevia"
                required
              />
            </div>
          </FormCardLayout>

          <Button
            disabled={loading}
            type="submit"
            className="btn-black btn-md btn-rounded btn-nav-btn display-block ml-auto mr-40 mt-50"
          >
            {loading ? "Submit..." : " Submit application"}
          </Button>
        </form>
      </Container>
    </Section>
  );
};

export default Form;
