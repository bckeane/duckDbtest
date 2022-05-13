
function translateEventName(eName) {
    let rName = "";

    //this little magic upper cases first letter of event name
    let split = eName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

    switch (split) {
      case "200 IM Relay":
        rName = "200 Medley Relay";
        break;
      case "50 Free":
        rName = "50 Freestyle";
        break;
      case "100 Free":
        rName = "100 Freestyle";
        break;
        case "200 Free":
          rName = "200 Freestyle";
          break;
      case "500 Free":
        rName = "500 Freestyle";
        break;
      case "200 Free Relay":
        rName = "200 Freestyle Relay";
        break;
      case "400 Free Relay":
        rName = "400 Freestyle Relay";
        break;
      case "100 Fly":
        rName = "100 Butterfly";
        break;
      case "100 Back":
        rName = "100 Backstroke";
        break;
      case "100 Breast":
        rName = "100 Breaststroke";
        break;
  
      default:
        rName = eName;
    }
    console.log("translateEventName", eName, split, rName);
    return rName;
  }

  module.exports = { translateEventName }