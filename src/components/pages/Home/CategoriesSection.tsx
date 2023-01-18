import React from "react";
import { Section, Container } from "./style";
import Typography from "components/atoms/Typography";
import { Button } from "components/atoms/Button";
import Link from "next/link";

interface Props {}
const CategoriesSection: React.FC<Props> = () => {
  return (
    <Section className="mt-120">
      <Container>
        <Typography
          as="h5"
          text="Our core categories"
          className="heading-3 text-center mb-40 mt-70"
        />

        <div className="category-card">
          <div className="category-card__description">
            <Typography as="h4" className="heading-4 mb-20">
              Creative & Design
            </Typography>
            <Typography as="p" className="paragraph-3 paragraph--light--mobile">
              build creative skills in photography, animation, video editing,
              graphic design, illustration and so much more. Build and enhance
              skills in user experience research, mobile, web design, and
              working within product teams.
            </Typography>
            <Link href="/courses">
              <a>
                <Button className="btn-black btn-md btn-rounded btn-nav-btn mt-30">
                  View Courses
                </Button>
              </a>
            </Link>
          </div>
          <div className="category-card__image responsive-image-container">
            <img src="images/pic-27.webp" alt="" />
          </div>
        </div>
        <div className="category-card">
          <div className="category-card__image responsive-image-container">
            <img src="images/pic-19.webp" alt="" />
          </div>
          <div className="category-card__description">
            <Typography as="h4" className="heading-4 mb-20">
              Startup & <br />
              Entrepreneurship
            </Typography>
            <Typography as="p" className="paragraph-3 paragraph--light--mobile">
              create change, innovate, and lead, build a thriving business in a
              disruptive world. Build skills in product strategy, launching and
              iterating on products.
            </Typography>
            <Link href="/courses">
              <a>
                <Button className="btn-black btn-md btn-rounded btn-nav-btn mt-30">
                  View Courses
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="category-card">
          <div className="category-card__description">
            <Typography as="h4" className="heading-4 mb-20">
              Marketing
            </Typography>
            <Typography as="p" className="paragraph-3 paragraph--light--mobile">
              create campaigns, analyze the result, learn content marketing,
              growth strategy, product marketing, conversation optimization and
              more.
            </Typography>
            <Link href="/courses">
              <a>
                <Button className="btn-black btn-md btn-rounded btn-nav-btn mt-30">
                  View Courses
                </Button>
              </a>
            </Link>
          </div>
          <div className="category-card__image responsive-image-container">
            <img src="images/pic-20.webp" alt="" />
          </div>
        </div>
        <div className="category-card">
          <div className="category-card__image responsive-image-container">
            <img src="images/pic-21.webp" alt="" />
          </div>
          <div className="category-card__description">
            <Typography as="h4" className="heading-4 mb-20">
              Data Analytics
            </Typography>
            <Typography as="p" className="paragraph-3 paragraph--light--mobile">
              master data analytics, visualization, SQL, structure, and
              algorithms. Learn tools or enhance your knowledge of tools like
              tableau, excel and R.
            </Typography>
            <Link href="/courses">
              <a>
                <Button className="btn-black btn-md btn-rounded btn-nav-btn mt-30">
                  View Courses
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="category-card">
          <div className="category-card__description">
            <Typography as="h4" className="heading-4 mb-20">
              Software Development
            </Typography>
            <Typography as="p" className="paragraph-3 paragraph--light--mobile">
              Learn mobile, front, blockchain and back-end development. code
              with HTML, CSS, JavaScript, React, Django (Python), Ruby on Rails,
              PHP and more.
            </Typography>
            <Link href="/courses">
              <a>
                <Button className="btn-black btn-md btn-rounded btn-nav-btn mt-30">
                  View Courses
                </Button>
              </a>
            </Link>
          </div>
          <div className="category-card__image responsive-image-container">
            <img src="images/pic-22.webp" alt="" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CategoriesSection;
