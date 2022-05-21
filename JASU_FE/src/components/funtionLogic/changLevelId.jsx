const changeLevelId = (levelId) => {
    let level = "";
    if (levelId === "1") level = "Sinh viên";
    else if (levelId === "2") level = "Gia sư";
    else if (levelId === "3") level = "Giáo viên";
  
    return level;
  };
export default changeLevelId;