const changeSexId = (sexId) => {
    let sex = "Nam";
    if (sexId === "2") sex = "Nữ";
    return sex;
  };
export default changeSexId;