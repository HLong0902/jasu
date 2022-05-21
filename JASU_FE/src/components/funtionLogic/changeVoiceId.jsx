const changeVoiceId = (voiceId) => {
    let voice = "Miền Bắc";
    if (voiceId === "2") voice = "Miền Trung";
    else if (voiceId === "3") voice = "Miền Nam";
    return voice;
  };
export default changeVoiceId;