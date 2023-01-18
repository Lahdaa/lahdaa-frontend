import Skeleton from "react-loading-skeleton";

const DashboardLoader = () => {
  const loaderBgColor = "#ffffff6e";
  const style = {
    main: {
      display: "grid",
      gridTemplateColumns: "1fr 33%",
      gridGap: "2.5rem",
      paddingTop: "5rem",
    },

    contentRightSideTop: {
      padding: "2rem",
      backgroundColor: loaderBgColor,
      borderRadius: "1rem",
      marginBottom: "25px",
    },

    table: {
      padding: "1.5rem",
      backgroundColor: loaderBgColor,
      borderRadius: "1rem",
    },

    tableItem: {
      borderTop: "1px solid rgba(232, 232, 232, 0.7)",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
    },

    gap10: {
      gap: "10px",
    },
    gap5: {
      gap: "5px",
    },
  };

  return (
    <div className="" style={style.main}>
      {/* Left side of the dashboard main content */}
      <div>
        {/* User Card */}
        <div className="m-b-20px">
          <Skeleton height={"200px"} width={"100%"} />
        </div>

        {/* Bank details waring */}
        <div className="m-b-30px">
          <Skeleton height={"40px"} width={"100%"} />
        </div>

        {/* Courses Table Title (My Courses) */}
        <div className="m-b-10px">
          <Skeleton height={"20px"} width={"80px"} />
        </div>
        {/* Courses Table */}
        <div style={style.table}>
          <div className="flex-r-jcbetween-aicenter m-b-20px">
            <Skeleton height={"20px"} width={"80px"} />
            <div className="m-r-25px">
              <Skeleton height={"20px"} width={"80px"} />
            </div>
            <div></div>
          </div>
          {/* Table Item */}
          <div className="flex-r-jcbetween-aicenter" style={style.tableItem}>
            <div className="flex-r-aicenter" style={style.gap10}>
              <Skeleton height={"47px"} width={"47px"} />
              <Skeleton height={"15px"} width={"200px"} />
            </div>
            <div className="flex-c-jccenter-aicenter " style={style.gap5}>
              <Skeleton height={"20px"} width={"50px"} />
              <Skeleton height={"8px"} width={"80px"} />
            </div>
            <Skeleton height={"35px"} width={"80px"} />
            <Skeleton height={"18px"} width={"4px"} />
          </div>
          {/* Table Item */}
          <div className="flex-r-jcbetween-aicenter" style={style.tableItem}>
            <div className="flex-r-aicenter" style={style.gap10}>
              <Skeleton height={"47px"} width={"47px"} />
              <Skeleton height={"15px"} width={"200px"} />
            </div>
            <div className="flex-c-jccenter-aicenter " style={style.gap5}>
              <Skeleton height={"20px"} width={"50px"} />
              <Skeleton height={"8px"} width={"80px"} />
            </div>
            <Skeleton height={"35px"} width={"80px"} />
            <Skeleton height={"18px"} width={"4px"} />
          </div>
          {/* Table Item */}
          <div className="flex-r-jcbetween-aicenter" style={style.tableItem}>
            <div className="flex-r-aicenter" style={style.gap10}>
              <Skeleton height={"47px"} width={"47px"} />
              <Skeleton height={"15px"} width={"200px"} />
            </div>
            <div className="flex-c-jccenter-aicenter " style={style.gap5}>
              <Skeleton height={"20px"} width={"50px"} />
              <Skeleton height={"8px"} width={"80px"} />
            </div>
            <Skeleton height={"35px"} width={"80px"} />
            <Skeleton height={"18px"} width={"4px"} />
          </div>
          {/* Table Item */}
          <div className="flex-r-jcbetween-aicenter" style={style.tableItem}>
            <div className="flex-r-aicenter" style={style.gap10}>
              <Skeleton height={"47px"} width={"47px"} />
              <Skeleton height={"15px"} width={"200px"} />
            </div>
            <div className="flex-c-jccenter-aicenter " style={style.gap5}>
              <Skeleton height={"20px"} width={"50px"} />
              <Skeleton height={"8px"} width={"80px"} />
            </div>
            <Skeleton height={"35px"} width={"80px"} />
            <Skeleton height={"18px"} width={"4px"} />
          </div>
          {/* Table Item */}
          <div className="flex-r-jcbetween-aicenter" style={style.tableItem}>
            <div className="flex-r-aicenter" style={style.gap10}>
              <Skeleton height={"47px"} width={"47px"} />
              <Skeleton height={"15px"} width={"200px"} />
            </div>
            <div className="flex-c-jccenter-aicenter " style={style.gap5}>
              <Skeleton height={"20px"} width={"50px"} />
              <Skeleton height={"8px"} width={"80px"} />
            </div>
            <Skeleton height={"35px"} width={"80px"} />
            <Skeleton height={"18px"} width={"4px"} />
          </div>
        </div>
      </div>

      {/* Right side of the dashboard main content */}
      <div>
        <div style={style.contentRightSideTop}>
          <div className="m-b-20px">
            <Skeleton height={"60px"} width={"100%"} />
          </div>
          <div className="m-b-20px">
            <Skeleton height={"60px"} width={"100%"} />
          </div>
          <div className="m-b-20px">
            <Skeleton height={"60px"} width={"100%"} />
          </div>
          <div className="m-b-20px">
            <Skeleton height={"60px"} width={"100%"} />
          </div>
        </div>
        <div style={style.contentRightSideTop}>
          <div className="flex-r-jcbetween-aicenter">
            <div style={{ width: "77%" }}>
              <Skeleton height={"40px"} width={"100%"} />
            </div>
            <div style={{ width: "20%" }}>
              <Skeleton height={"40px"} width={"100%"} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex-r-jcbetween-aicenter">
        <div className="flex-r-aicenter m-t-20px" style={style.gap10}>
          <Skeleton height={"20px"} width={"120px"} />
          <Skeleton height={"20px"} width={"120px"} />
        </div>
        <div className="flex-r-aicenter m-t-20px" style={style.gap10}>
          <Skeleton height={"30px"} width={"30px"} />
          <Skeleton height={"30px"} width={"70px"} />
        </div>
      </div>

      <div className="" style={style.main}>
        <div className="flex-c flex-gap-30px">
          <Skeleton height={"300px"} width={"100%"} />
          <Skeleton height={"300px"} width={"100%"} />
        </div>
        <Skeleton height={"450px"} width={"100%"} />
        <Skeleton height={"600px"} width={"100%"} />
      </div> */}
    </div>
  );
};

export default DashboardLoader;
