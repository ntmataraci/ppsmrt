const popUp = () => {
  let cssRuleFile = "./style.css";
  let lnk = document.createElement("link");
  lnk.setAttribute("rel", "stylesheet");
  lnk.setAttribute("type", "text/css");
  lnk.setAttribute("href", cssRuleFile);
  document.getElementsByTagName("head")[0].appendChild(lnk);

  let cssRuleAdditionals = "./additionals.css";
  let additionals = document.createElement("link");
  additionals.setAttribute("rel", "stylesheet");
  additionals.setAttribute("type", "text/css");
  additionals.setAttribute("href", cssRuleAdditionals);
  document.getElementsByTagName("head")[0].appendChild(additionals);
  const prevFromScript =
    document.getElementsByTagName("script")[0].previousSibling;

  const Modal_cross =
    () => `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18 3.00001C15.0333 3.00001 12.1332 3.87974 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2598C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33.0018 16.0297 32.6151 14.0783 31.8619 12.2576C31.1088 10.4369 30.004 8.78254 28.6107 7.3893C27.2175 5.99605 25.5632 4.89123 23.7424 4.13806C21.9217 3.38489 19.9704 2.99816 18 3.00001ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3312 7.8365 11.193 9.51473 9.51473C11.193 7.8365 13.3312 6.69361 15.6589 6.23058C17.9867 5.76756 20.3995 6.0052 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3066 30 15.6266 30 18C29.9958 21.1813 28.7301 24.2311 26.4806 26.4806C24.2311 28.7301 21.1813 29.9958 18 30ZM23.385 10.5L18 15.885L12.615 10.5L10.5 12.615L15.885 18L10.5 23.385L12.615 25.5L18 20.115L23.385 25.5L25.5 23.385L20.115 18L25.5 12.615L23.385 10.5Z" fill="black"/>
</svg>`;
const Modal_cross_white =
() => `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18 3.00001C15.0333 3.00001 12.1332 3.87974 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2598C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33.0018 16.0297 32.6151 14.0783 31.8619 12.2576C31.1088 10.4369 30.004 8.78254 28.6107 7.3893C27.2175 5.99605 25.5632 4.89123 23.7424 4.13806C21.9217 3.38489 19.9704 2.99816 18 3.00001ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3312 7.8365 11.193 9.51473 9.51473C11.193 7.8365 13.3312 6.69361 15.6589 6.23058C17.9867 5.76756 20.3995 6.0052 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3066 30 15.6266 30 18C29.9958 21.1813 28.7301 24.2311 26.4806 26.4806C24.2311 28.7301 21.1813 29.9958 18 30ZM23.385 10.5L18 15.885L12.615 10.5L10.5 12.615L15.885 18L10.5 23.385L12.615 25.5L18 20.115L23.385 25.5L25.5 23.385L20.115 18L25.5 12.615L23.385 10.5Z" fill="white"/>
</svg>`;

 const iconB2_1=()=>`
<svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 23.18L24.8 30.94L18 26.84L11.2 30.94L13 23.2L7 18.02L14.92 17.34L18 10.04L21.08 17.32L29 18L23 23.18ZM18 4.38L32 10.6V20C32 29.04 26.04 37.38 18 39.86C9.96 37.38 4 29.04 4 20V10.6L18 4.38ZM18 0L0 8V20C0 31.1 7.68 41.48 18 44C28.32 41.48 36 31.1 36 20V8L18 0Z" fill="black"/>
</svg>`

const iconB2_3=()=>`
<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 59.5C46.2924 59.5 59.5 46.2924 59.5 30C59.5 13.7076 46.2924 0.5 30 0.5C13.7076 0.5 0.5 13.7076 0.5 30C0.5 46.2924 13.7076 59.5 30 59.5Z" stroke="#7D4AEA"/>
<path d="M22 29H34.17L28.58 23.41L30 22L38 30L30 38L28.59 36.59L34.17 31H22V29Z" fill="#7D4AEA"/>
</svg>`


  // const codes = {
  //   modalName: "A1_1",
  //   size: "Medium",
  //   color: "orange",
  //   position: "center",
  //   logoUrl: "-",
  //   content:
  //     "Hello There !,<input type='text' id='inputVal'></input>,Join The Light Side,No matter",
  //   imgUrl:
  //     "https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0",
  //   visitorDevice: "desktop",
  //   afterSeconds: "3",
  //   afterScroll: "70",
  //   trafficSource: "-",
  //   language: "French,German,Polish,English,Turkish",
  //   exitTargeting: "true",
  //   webhookUrl: "https://633a064d471b8c3955694636.mockapi.io/new",
  //   sendSubmission: "true",
  //   clickData: "true",
  // };

  // main key - important 2 of them must be true , otherwise you dont see popup
  let allowance;
  let DeviceAllowance;
  let LanguageAllowance;

  //browser lang

  let userLang = navigator.language || navigator.userLanguage;
  const languageArr = [
    { code: "ab", name: "Abkhazian" },
    { code: "aa", name: "Afar" },
    { code: "af", name: "Afrikaans" },
    { code: "ak", name: "Akan" },
    { code: "sq", name: "Albanian" },
    { code: "am", name: "Amharic" },
    { code: "ar", name: "Arabic" },
    { code: "an", name: "Aragonese" },
    { code: "hy", name: "Armenian" },
    { code: "as", name: "Assamese" },
    { code: "av", name: "Avaric" },
    { code: "ae", name: "Avestan" },
    { code: "ay", name: "Aymara" },
    { code: "az", name: "Azerbaijani" },
    { code: "bm", name: "Bambara" },
    { code: "ba", name: "Bashkir" },
    { code: "eu", name: "Basque" },
    { code: "be", name: "Belarusian" },
    { code: "bn", name: "Bengali (Bangla)" },
    { code: "bh", name: "Bihari" },
    { code: "bi", name: "Bislama" },
    { code: "bs", name: "Bosnian" },
    { code: "br", name: "Breton" },
    { code: "bg", name: "Bulgarian" },
    { code: "my", name: "Burmese" },
    { code: "ca", name: "Catalan" },
    { code: "ch", name: "Chamorro" },
    { code: "ce", name: "Chechen" },
    { code: "ny", name: "Chichewa, Chewa, Nyanja" },
    { code: "zh", name: "Chinese" },
    { code: "zh-Hans", name: "Chinese (Simplified)" },
    { code: "zh-Hant", name: "Chinese (Traditional)" },
    { code: "cv", name: "Chuvash" },
    { code: "kw", name: "Cornish" },
    { code: "co", name: "Corsican" },
    { code: "cr", name: "Cree" },
    { code: "hr", name: "Croatian" },
    { code: "cs", name: "Czech" },
    { code: "da", name: "Danish" },
    { code: "dv", name: "Divehi, Dhivehi, Maldivian" },
    { code: "nl", name: "Dutch" },
    { code: "dz", name: "Dzongkha" },
    { code: "en", name: "English" },
    { code: "eo", name: "Esperanto" },
    { code: "et", name: "Estonian" },
    { code: "ee", name: "Ewe" },
    { code: "fo", name: "Faroese" },
    { code: "fj", name: "Fijian" },
    { code: "fi", name: "Finnish" },
    { code: "fr", name: "French" },
    { code: "ff", name: "Fula, Fulah, Pulaar, Pular" },
    { code: "gl", name: "Galician" },
    { code: "gd", name: "Gaelic (Scottish)" },
    { code: "gv", name: "Gaelic (Manx)" },
    { code: "ka", name: "Georgian" },
    { code: "de", name: "German" },
    { code: "el", name: "Greek" },
    { code: "kl", name: "Greenlandic" },
    { code: "gn", name: "Guarani" },
    { code: "gu", name: "Gujarati" },
    { code: "ht", name: "Haitian Creole" },
    { code: "ha", name: "Hausa" },
    { code: "he", name: "Hebrew" },
    { code: "hz", name: "Herero" },
    { code: "hi", name: "Hindi" },
    { code: "ho", name: "Hiri Motu" },
    { code: "hu", name: "Hungarian" },
    { code: "is", name: "Icelandic" },
    { code: "io", name: "Ido" },
    { code: "ig", name: "Igbo" },
    { code: "id, in", name: "Indonesian" },
    { code: "ia", name: "Interlingua" },
    { code: "ie", name: "Interlingue" },
    { code: "iu", name: "Inuktitut" },
    { code: "ik", name: "Inupiak" },
    { code: "ga", name: "Irish" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "jv", name: "Javanese" },
    { code: "kl", name: "Kalaallisut, Greenlandic" },
    { code: "kn", name: "Kannada" },
    { code: "kr", name: "Kanuri" },
    { code: "ks", name: "Kashmiri" },
    { code: "kk", name: "Kazakh" },
    { code: "km", name: "Khmer" },
    { code: "ki", name: "Kikuyu" },
    { code: "rw", name: "Kinyarwanda (Rwanda)" },
    { code: "rn", name: "Kirundi" },
    { code: "ky", name: "Kyrgyz" },
    { code: "kv", name: "Komi" },
    { code: "kg", name: "Kongo" },
    { code: "ko", name: "Korean" },
    { code: "ku", name: "Kurdish" },
    { code: "kj", name: "Kwanyama" },
    { code: "lo", name: "Lao" },
    { code: "la", name: "Latin" },
    { code: "lv", name: "Latvian (Lettish)" },
    { code: "li", name: "Limburgish ( Limburger)" },
    { code: "ln", name: "Lingala" },
    { code: "lt", name: "Lithuanian" },
    { code: "lu", name: "Luga-Katanga" },
    { code: "lg", name: "Luganda, Ganda" },
    { code: "lb", name: "Luxembourgish" },
    { code: "gv", name: "Manx" },
    { code: "mk", name: "Macedonian" },
    { code: "mg", name: "Malagasy" },
    { code: "ms", name: "Malay" },
    { code: "ml", name: "Malayalam" },
    { code: "mt", name: "Maltese" },
    { code: "mi", name: "Maori" },
    { code: "mr", name: "Marathi" },
    { code: "mh", name: "Marshallese" },
    { code: "mo", name: "Moldavian" },
    { code: "mn", name: "Mongolian" },
    { code: "na", name: "Nauru" },
    { code: "nv", name: "Navajo" },
    { code: "ng", name: "Ndonga" },
    { code: "nd", name: "Northern Ndebele" },
    { code: "ne", name: "Nepali" },
    { code: "no", name: "Norwegian" },
    { code: "nb", name: "Norwegian bokmål" },
    { code: "nn", name: "Norwegian nynorsk" },
    { code: "ii", name: "Nuosu" },
    { code: "oc", name: "Occitan" },
    { code: "oj", name: "Ojibwe" },
    { code: "cu", name: "Old Church Slavonic, Old Bulgarian" },
    { code: "or", name: "Oriya" },
    { code: "om", name: "Oromo (Afaan Oromo)" },
    { code: "os", name: "Ossetian" },
    { code: "pi", name: "Pāli" },
    { code: "ps", name: "Pashto, Pushto" },
    { code: "fa", name: "Persian (Farsi)" },
    { code: "pl", name: "Polish" },
    { code: "pt", name: "Portuguese" },
    { code: "pa", name: "Punjabi (Eastern)" },
    { code: "qu", name: "Quechua" },
    { code: "rm", name: "Romansh" },
    { code: "ro", name: "Romanian" },
    { code: "ru", name: "Russian" },
    { code: "se", name: "Sami" },
    { code: "sm", name: "Samoan" },
    { code: "sg", name: "Sango" },
    { code: "sa", name: "Sanskrit" },
    { code: "sr", name: "Serbian" },
    { code: "sh", name: "Serbo-Croatian" },
    { code: "st", name: "Sesotho" },
    { code: "tn", name: "Setswana" },
    { code: "sn", name: "Shona" },
    { code: "ii", name: "Sichuan Yi" },
    { code: "sd", name: "Sindhi" },
    { code: "si", name: "Sinhalese" },
    { code: "ss", name: "Siswati" },
    { code: "sk", name: "Slovak" },
    { code: "sl", name: "Slovenian" },
    { code: "so", name: "Somali" },
    { code: "nr", name: "Southern Ndebele" },
    { code: "es", name: "Spanish" },
    { code: "su", name: "Sundanese" },
    { code: "sw", name: "Swahili (Kiswahili)" },
    { code: "ss", name: "Swati" },
    { code: "sv", name: "Swedish" },
    { code: "tl", name: "Tagalog" },
    { code: "ty", name: "Tahitian" },
    { code: "tg", name: "Tajik" },
    { code: "ta", name: "Tamil" },
    { code: "tt", name: "Tatar" },
    { code: "te", name: "Telugu" },
    { code: "th", name: "Thai" },
    { code: "bo", name: "Tibetan" },
    { code: "ti", name: "Tigrinya" },
    { code: "to", name: "Tonga" },
    { code: "ts", name: "Tsonga" },
    { code: "tr", name: "Turkish" },
    { code: "tk", name: "Turkmen" },
    { code: "tw", name: "Twi" },
    { code: "ug", name: "Uyghur" },
    { code: "uk", name: "Ukrainian" },
    { code: "ur", name: "Urdu" },
    { code: "uz", name: "Uzbek" },
    { code: "ve", name: "Venda" },
    { code: "vi", name: "Vietnamese" },
    { code: "vo", name: "Volapük" },
    { code: "wa", name: "Wallon" },
    { code: "cy", name: "Welsh" },
    { code: "wo", name: "Wolof" },
    { code: "fy", name: "Western Frisian" },
    { code: "xh", name: "Xhosa" },
    { code: "yi, ji", name: "Yiddish" },
    { code: "yo", name: "Yoruba" },
    { code: "za", name: "Zhuang, Chuang" },
    { code: "zu", name: "Zulu" },
  ];

  const findBrowser = languageArr.find(
    (item) => item.code + "-" + item.code.toUpperCase() == userLang
  );
  const arrayCodeLang = codes.language.split(",");
  const allowToWeb =
    arrayCodeLang.find((item) => item == findBrowser.name) ||
    codes.language == "";
  console.log(allowToWeb);
  if (allowToWeb) {
    LanguageAllowance = true;
  }

  // DEVice detector

  const deviceDetector = (function () {
    let ua = navigator.userAgent.toLowerCase();
    let detect = function (s) {
      if (s === undefined) s = ua;
      else ua = s.toLowerCase();
      if (
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
          ua
        )
      )
        return "tablet";
      else if (
        /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(
          ua
        )
      )
        return "phone";
      else return "desktop";
    };
    return {
      device: detect(),
      detect: detect,
      isMobile: detect() != "desktop" ? true : false,
      userAgent: ua,
    };
  })();

  if (
    codes.visitorDevice.includes(deviceDetector.device) ||
    codes.visitorDevice == "all"
  ) {
    DeviceAllowance = true;
  }

  // allowance
  if (DeviceAllowance == true && LanguageAllowance == true) {
    allowance = true;
  } else {
    allowance = false;
  }

  console.log(allowance);
  // if(allowance==false){
  // alert("if you see false, 1) if you select desktop and you re inspection screen with mobile 2) Your language not in the list  ")}

  const logoExist = () =>
    codes.logoUrl != "-"
      ? `<img id="logo" class="icon_style" src=${codes.logoUrl}></img>`
      : "";
  const imgExist = () =>
    codes.imgUrl != "-" ? `<img id="pic" src=${codes.imgUrl}></img>` : "";

  const contentArray = codes.content.split("~");

  const header = contentArray[0];
  const button2 = contentArray[contentArray.length - 1];
  const button1 = contentArray[contentArray.length - 2];
  const textBody = contentArray.slice(1, contentArray.length - 2);
  const styledBody = textBody.map((item, idx) => `<div>${item}</div>`).join("");

  // let mainText = `
  // <div id="main_container" >
  //  <div class="card-${codes.modalName.toLocaleLowerCase()}  ${codes.size} ${
  //   codes.position
  // } ${codes.color}"  id="cardAnim">
  // <div className="content_box ${codes.modalName.toLocaleLowerCase()}_additional"}>
  //  <div class="cross_icon" > ${Modal_cross()} </div>
  // ${logoExist()}
  // ${imgExist()}
  // <h2>${header}</h2>
  // ${styledBody}
  // <div class="button_row">
  // <button id="button1" class="btn-link_white half">${button1}</button>
  // <button id="button2" class="btn-link_violet half btn-link ${
  //   codes.color
  // }">${button2}</button>
  // </div>
  // </div>
  // <div>
  // `;

  let mainText = modeller(codes.modalName.toLowerCase());
  //********                OPEN THIS FINAL CASE !!!  ************ */
  // if(allowance){
  // document.body.innerHTML =mainText;
  // }
  const creator = () => {
    let first = document.body.children[0];
    var beforeEle = document.createElement("div");
    beforeEle.innerHTML = mainText;
    document.body.insertBefore(beforeEle, first);
  };
  creator();

  // document.getElementById("creator").innerHTML = mainText ;
  //********************************************* */

  const closeMe = () => {
    document
      .getElementById("main_container")
      .parentNode.removeChild(document.getElementById("main_container"));
  };

  document.querySelector(".cross_icon").addEventListener("click", () => {
    console.log("ııt")
    closeMe();
  });

  // timeout effects

  const animationMethods = [
    { name: "right", animation: " translateX(-500px) translateY(-50%)" },
    { name: "left", animation: "    translateX(500px) translateY(-50%) " },
    { name: "top", animation: "     translateY(600px) translateX(-50%) " },
    { name: "top-right", animation: "  translateY(600px) translateX(-500px) " },
    { name: "top-left", animation: "  translateY(600px) translateX(500px) " },
    { name: "bottom", animation: "     translateY(-600px) translateX(-50%) " },
    {
      name: "bottom-right",
      animation: "translateY(-600px) translateX(-500px)",
    },
    { name: "bottom-left", animation: "translateY(-600px) translateX(500px)" },
  ];

  const findAnimation = animationMethods.find(
    (name) => name.name == codes.position
  );

  const runProject = (eventType) => {
    console.log(eventType);
    if (!document.getElementById("main_container")) {
      creator();
      document.querySelector(".cross_icon").addEventListener("click", () => {
        closeMe();
      });
      buttonListeners();
    }
    // document.querySelector("#main_container").style.display = "flex";
    if (codes.position != "center") {
      console.log(findAnimation.animation);
      document.getElementById("cardAnim").style.transform =
        findAnimation.animation;
      document.getElementById("cardAnim").style.transition = "all 1s linear";
    } else {
      document
        .getElementById("cardAnim")
        .animate([{ opacity: "0" }, { opacity: "1" }], {
          duration: 1000,
          easing: "linear",
          fill: "forwards",
        });
    }
  };

  setTimeout(() => runProject("timeoutEvent"), +codes.afterSeconds * 1000);

  // timeouts effect ending ***

  //scroll
  if (codes.afterScroll != "0") {
    const scrollEvent = () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100) * -1;
      console.log(scrollPercentRounded);
      if (+codes.afterScroll < scrollPercentRounded) {
        runProject("scrollEvent");
        document.removeEventListener("scroll", scrollEvent);
      }
    };
    document.addEventListener("scroll", scrollEvent);
  }

  // exit intent
  if (codes.exitTargeting == "true") {
    const intentAction = (e) => {
      const shouldShowExitIntent =
        !e.toElement && !e.relatedTarget && e.clientY < 10;
      if (shouldShowExitIntent) {
        document.removeEventListener("mouseout", intentAction);
        runProject("intent");
        setTimeout(
          () => document.addEventListener("mouseout", intentAction),
          10000
        );
      }
    };
    document.addEventListener("mouseout", intentAction);
  }

  //webhook datas

  //date
  const currentdate = new Date();
  const datetime =
    "Last Sync: " +
    currentdate.getDay() +
    "/" +
    currentdate.getMonth() +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  //device
  const deviceHook = deviceDetector.device;

  //browser type

  function fnBrowserDetect() {
    let userAgent = navigator.userAgent;
    let browserName;
    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "edge";
    } else {
      browserName = "No browser detection";
    }

    document.querySelector("h1").innerText =
      "You are using " + browserName + " browser";
  }

  const browserHook = (function (agent) {
    switch (true) {
      case agent.indexOf("edge") > -1:
        return "MS Edge";
      case agent.indexOf("edg/") > -1:
        return "Edge ( chromium based)";
      case agent.indexOf("opr") > -1 && !!window.opr:
        return "Opera";
      case agent.indexOf("chrome") > -1 && !!window.chrome:
        return "Chrome";
      case agent.indexOf("trident") > -1:
        return "MS IE";
      case agent.indexOf("firefox") > -1:
        return "Mozilla Firefox";
      case agent.indexOf("safari") > -1:
        return "Safari";
      default:
        return "other";
    }
  })(window.navigator.userAgent.toLowerCase());

  //language
  const languageHook = findBrowser.name;

  //datas

  const headerHook = header;
  const contentHook = textBody;

  let inputHook="";
  let buttonHook;

const inputHandler = () =>{
  if(  document.getElementById("inputVal")){
    document.querySelectorAll("#inputVal").forEach(item=>
      inputHook+=item.getAttribute('placeholder')+":"+item.value+"\n"
      )
    };
}


  const buttonListeners = () => {
    if( document.querySelector("#button1")){
    document.querySelector("#button1").addEventListener("click", (e) => {
      buttonHook = button1;
      inputHandler()
      closeMe();
      fetcher();

    })};
    if( document.querySelector("#button2")){
    document.querySelector("#button2").addEventListener("click", (e) => {
      buttonHook = button2;
      inputHandler()
      closeMe();
      fetcher();

    })};
  };
  buttonListeners();

  //operating system
  const opeatingHook = window.navigator.platform;

  //referrer
  //send datas to webhook
  const urıWebhook = codes.webhookUrl;
  const fetcher = async () => {
    const allData = JSON.stringify({
      modalName: codes.modalName,
      header: headerHook,
      contents: contentHook,
      input: inputHook,
      referrer: document.referrer,
      date: datetime,
      language: languageHook,
      browser: browserHook,
      device: deviceHook,
      OS: opeatingHook,
      buttonClicked: buttonHook,
    });
    const data = await fetch(urıWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: allData,
    });
    const result = await data.json();
    console.log(result);
  };

  //**** models */

  function modeller(x) {
    switch (x) {
      case "a1_1":
        return (`
<div id="main_container" >
<div class="card-a1_1  ${codes.size} ${codes.position} "  id="cardAnim">
<div class="content_box">
<div class="cross_icon" > ${Modal_cross()} </div>
<div class="icon_style"><img src=${codes.logoUrl}></img></div>
<h2>${header}</h2>
<div>${contentArray[1]}</div>
<input id="inputVal" placeholder=${contentArray[2]}/>
<div class="button_row">
 <button id="button1" class="btn-link_white half" >${contentArray[3]}</button>
<button id="button2" class="btn-link half ${codes.color}">${contentArray[4]}</button>
 </div>
 </div>
</div>
`);

      case "a1_2":
        return (`
        <div id="main_container" >
      <div class="card-a1_2 ${codes.size} ${codes.position}"  id="cardAnim"" >
      <div class="cross_icon">${Modal_cross()}</div>
        <div class="icon_style">
        <img Src=${codes.imgUrl}></img>
        </div>
      <div class="content_box">
        <h2>${contentArray[0]}</h2>
        <div>${contentArray[1]}</div>
        <div class="button_col">
          <button id="button1" class="btn-link_white full">${contentArray[2]}</button>
          <button id="button2" class= "btn-link full  + ${codes.color}" >
          ${contentArray[3]}
          </button>
        </div>
        </div>
      </div>
</div>
`);


case "a1_3":
  return(
    `
    <div id="main_container" >
<div class="card-a1_3 ${codes.size} ${codes.position}"  id="cardAnim"> 
<div class="cross_icon">${Modal_cross()}</div>
<div class="content_box">
<div>Plans</div>
 <h2>${contentArray[0]}</h2>
<div>${contentArray[1]}</div>
<ul>
    <li><div><input type="radio" id="radio1" name="val"></input>${contentArray[2]}</div><div>${contentArray[3]}</div></li>
    <li><div><input type="radio" id="radio2" name="val"></input>${contentArray[4]}</div><div>${contentArray[5]}</div></li>
    <li><div><input type="radio" id="radio3" name="val"></input>${contentArray[6]}</div><div>${contentArray[7]}</div></li>
</ul>
<div class="button_row">
 <button id="button1" class="btn-link_white half" >${contentArray[8]}</button>
<button id="button2" class="btn-link half ${codes.color}">${contentArray[9]}</button>
 </div>
 </div>
</div>
</div>
`
  )


  case "a1_4":
  return(`
  <div id="main_container" >
  <div class="card-a1_4 ${codes.size} ${codes.position}" id="cardAnim"> 
  <div class="content_box">
  <div class="cross_icon">${Modal_cross()}</div>
  <div class="icon_style"><img src=${codes.logoUrl}></img></div>
   <h2>${contentArray[0]}</h2>
  <div>${contentArray[1]}</div>
  <input id="inputVal" placeholder=${contentArray[2]}/>
  <div class="button_row">
   <button id="button1" class="btn-link full ${codes.color}"  >${contentArray[3]}</button>
  <button id="button2" class="btn-link_white full">${contentArray[4]}</button>
   </div>
   </div>
  </div>
  </div>
`
  )

  case "a2_1":
    return(`
    <div id="main_container" >
      <div class="card-a2_1 ${codes.size} ${codes.position}" id="cardAnim"> 
<div class="content_box">
<div class="cross_icon">${Modal_cross()}</div>
<div class="cross_icon" > <Modal_cross/> </div>
 <h2>${contentArray[0]}</h2>
<div>${contentArray[1]}</div>
<div class="button_row">
 <button id="button1" class="btn-link full ${codes.color}"  >${contentArray[2]}</button>
 </div>
 </div>
</div>
</div>
`
    )

case "a2_2":
  return(`
  <div id="main_container" >
    <div class="card-a2_2 ${codes.size} ${codes.position}" id="cardAnim"> 
<div class="content_box">
<div class="cross_icon" >${Modal_cross()} </div>
<div class="icon_style" ><img src=${codes.logoUrl}></img></div>
 <h2>${contentArray[0]}</h2>
<div>${contentArray[1]}</div>
<input id="inputVal" placeholder=${contentArray[2]}/>
<div class="button_row">
 <button id="button1" class="btn-link_white half" >${contentArray[3]}</button>
<button id="button2" class={"btn-link half ${codes.color}>${contentArray[4]}</button>
 </div>
 </div>
 </div>
</div>`
  )

  case "a2_3":
    return(`
    <div id="main_container" >
    <div class="card-a2_3 ${codes.size} ${codes.position} ${codes.color}" id="cardAnim"> 
    <div class="content_box">
    <div class="cross_icon" >${Modal_cross()} </div>
    <h2>${contentArray[0]}</h2>
    <div>${contentArray[1]}</div>
    <div class="button_row">
     <button id="button1" class="btn-link half ${codes.color} ">${contentArray[2]}</button>
     <button id="button2" class="btn-link_white half"  >${contentArray[3]}</button>
     </div>
     </div>
    </div>
    </div>
    `     
    )



    case "a2_4":
      return(`
      <div id="main_container" >
      <div class="card-a2_4 ${codes.size} ${codes.position} ${codes.color}" id="cardAnim"> 
      <div class="content_box">
      <div class="cross_icon" >${Modal_cross_white()} </div>
       <h2>${contentArray[0]}</h2>
      <div>${contentArray[1]}</div>
      <div class="transparent" >${contentArray[2]}</div>
      <div>${contentArray[3]}</div>
      <div class="button_row">
       <button id="button1" class="btn-link full ${codes.color}"  >${contentArray[4]}</button>
       </div>
       </div>
      </div>
      </div> 
`)

case "a3_1":
  return(`
  <div id="main_container">
    <div class="card-a3_1  ${codes.size}  ${codes.position}" id="cardAnim">
    <div class="cross_icon" >${Modal_cross()} </div>
    <div class="icon_style">
    <img src=${codes.imgUrl}></img></div>

<div class="content_box">
    <h2>${contentArray[0]}</h2>
    <div>${contentArray[1]}</div>
    <div style="width:100%" ><input id="inputVal" placeholder=${contentArray[2]}></input></div>
    <div style="width:100%" ><input id="inputVal" placeholder=${contentArray[3]}</input></div>
    <div class="button_col">
      <button id="button1" class="btn-link full ${codes.color}">${contentArray[4]}</button>
    </div>
    <div>  ${contentArray[5]}</div>
    </div>
  </div>
  </div>
  `  
  )


  case "a3_2":
    return(`
    <div id="main_container" >
<div class="card-a3_2 ${codes.size} ${codes.position}" id="cardAnim">
        <div style="display:flex;flex-Direction:row">
        <div class="cross_icon" >${Modal_cross()} </div>
  <div class="content_box" >
        <h2>${contentArray[0]}</h2>
        <div>${contentArray[1]}</div>
        <div style="width:100%" ><input id="inputVal" placeholder=${contentArray[2]}></input></div>
        <div style="width:100%" ><input id="inputVal" placeholder=${contentArray[3]}></input></div>
        <div class="button_col">
          <button id="button1" class="btn-link full ${codes.color}">
            ${contentArray[4]}
          </button>
        </div>
        <div>  ${contentArray[5]}</div>
        </div>
        <div class="icon_style" >
      
            <img
              style="height:100%"
              src=${codes.imgUrl}
            ></img>
        </div>
        </div>
      </div>
`
    )

case "a3_3":
  return(`
  <div id="main_container" >
  <div class="card-a3_3 ${codes.size}  ${codes.position}" id="cardAnim"> 
  <div class="content_box">
  <div class="cross_icon" >${Modal_cross()} </div>
  <div class="icon_style"  style="margin-Top:1rem"><img src=${codes.logoUrl}></img></div>
  
   <h2>${contentArray[0]}</h2>
  <div>${contentArray[1]}</div>
  <input id="inputVal" placeholder=${contentArray[2]}>  </input>
  <div class="button_row">
  <button id="button1" class="btn-link half ${codes.color}">${contentArray[3]}</button>
   </div>
   <div>${contentArray[4]}</div>
   </div>
  </div>  
  </div>  
  `)

  case "a3_4":
return(`
<div id="main_container" >
<div
class="card-a3_4 ${codes.size} ${codes.position}" id="cardAnim">
<div style="display:flex;flex-Direction:row;height:100%">
<div class="cross_icon" style="z-index:5" >${Modal_cross()} </div
<div class="icon_style">
<img src=${codes.imgUrl} style="height:100%;object-fit:cover"></img>
</div>
<div style="position:absolute;right:-45%;background-Color:transparent;top:0;width:100%;height:100%;display:flex;justify-Content:center;align-Items:center">
<div class="content_box" style="background:white;height:350px;width:${codes.size=="Small"?"250px":"80%"};border-radius:2rem">
<h2>${contentArray[0]}</h2>
<div>${contentArray[1]}</div>
<input style="width:100%" id="inputVal" placeholder=${contentArray[2]}>  </input>
<input style="width:100%" id="inputVal" placeholder=${contentArray[3]}>  </input>
<div class="button_col">
<button id="button1" class="btn-link full ${codes.color}">${contentArray[4]}</button>
</div>
<div> ${contentArray[5]}</div>
</div>
</div>
</div>
</div> 
</div>

`)

      case "b1_1":
        return (`
        <div id="main_container" >  
 <div class="card-b1_1  ${codes.size} ${codes.position} ${
          codes.color
        }"  id="cardAnim">
 <div class="icon_style"><img src=${codes.logoUrl}></img></div>
<div class="content_box b1_1_additional">
 <div class="cross_icon" > ${Modal_cross()} </div>
<h2>${header}</h2>
<div>${contentArray[1]}</div>
<div class="${codes.color} id="b1_1_bottom" >${contentArray[2]}</div>
</div>
</div>
<div>
</div>
`)

case "b1_2":
  return(`
  <div id="main_container" >  
  <div class="card-b1_2 ${codes.size} ${codes.color} ${codes.position}"  id="cardAnim"> 
<div class="content_box">
<div class="cross_icon" > ${Modal_cross_white()} </div>
<div style="width:100%;display:flex;justify-Content:flex-start;align-Items:flex-end;gap:2rem;margin-Left:1rem">
<div style="margin-Top:1rem">
<img   style="width:${codes.size=="Small"?"50px":codes.size=="Medium"?"70px":"100px"} ;border-radius:50%;aspect-ratio:1/1" src=${codes.imgUrl}></img>
</div>

<div style="display:flex;flex-Direction:column;align-Items:flex-start">
<div>${contentArray[0]}</div>
<div>${contentArray[1]}</div>
</div>
</div>
<div>${contentArray[2]}</div>
<div>${contentArray[3]}</div>
 </div>
 </div>
</div>
  `)

case "b1_3":
  return(`
  <div id="main_container" > 
  <div class="card-b1_3 ${codes.size} ${codes.color} ${codes.position}"  id="cardAnim"> 
  <div class="content_box">
  <div class="cross_icon" > ${Modal_cross_white()} </div>
  <h2>${contentArray[0]}</h2>
  <div style="display:flex;justify-Content:space-between; font-Size:36px">
  <button id="button1" class="b1_3_icons" > ${contentArray[1]}</button>
  <button id="button2" class="b1_3_icons" > ${contentArray[2]}</button>
  <button id="button3" class="b1_3_icons" > ${contentArray[3]}</button>
  <button id="button4" class="b1_3_icons" > ${contentArray[4]}</button>
  <button id="button5" class="b1_3_icons" > ${contentArray[5]}</button>
  </div>
  </div>
  </div>
  </div>
  `)


case "b1_4":
  return(`
  <div id="main_container" > 
  <div class="card-b1_4  ${codes.size} ${codes.position}"  id="cardAnim"> 
<div class="content_box">
<div class="cross_icon" >${Modal_cross()}</div>
<div class="icon_style"  style="margin-top:1rem"><img src=${codes.logoUrl}></img></div>
<h2>${contentArray[0]}</h2>
<div>${contentArray[1]}</div>
<div class="button_row">
<button id="button1" class="btn-link full ${codes.color}">${contentArray[2]}</button>
 </div>
 </div>
</div>
</div>
  
  `)

case "b2_1":
  return(`
  <div id="main_container" > 
  <div class="card-b2_1  ${codes.size} ${codes.color} ${codes.position}"  id="cardAnim"> 
<div class="content_box">
<div class="cross_icon" > ${Modal_cross()} </div>
<h2>${contentArray[0]}</h2>
<h3>${contentArray[1]}</h3>
<div style="display:flex;justify-Content:space-between; font-Size:36px;gap:0.5rem">
<button id="button1">${iconB2_1()}</button>
<button id="button2">${iconB2_1()}</button>
<button id="button3">${iconB2_1()}</button>
<button id="button4">${iconB2_1()}</button>
</div>
</div>
</div>
  </div>
  
  `)


case "b2_2":
  return(`
  <div id="main_container" > 
  <div class="card-b2_2 ${codes.size} ${codes.color} ${codes.position}"  id="cardAnim"> 
  <div class="content_box">
  <div class="cross_icon" >${Modal_cross()} </div>
  <div class="icon_style"  style="margin-Top:1rem"><img src=${codes.logoUrl}></img></div>
  
   <h2>${contentArray[0]}</h2>
  <div>${contentArray[1]}</div>
  <div class="button_row">
   <button id="button1" class="btn-link_white full" >${contentArray[2]}</button>
  <button id="button2" class="btn-link full ${codes.color}">${contentArray[3]}</button>
  <div>${contentArray[4]}</div>
   </div>
   </div>
  </div> 
  </div>
  
  `)

case "b2_3":
  return(`
  <div id="main_container" > 
    <div class="card-b2_3 ${codes.size} ${codes.color} ${codes.position}"  id="cardAnim"> 
<div class="content_box">
<div class="cross_icon" > ${Modal_cross()} </div>
<div class="icon_style" style="margin-Top:1rem"><img src=${codes.logoUrl}></img></div>
 <h2>${contentArray[0]}</h2>
<div>${contentArray[1]}</div>
<div class="button_row">
 <button id="button1" style="border:none;filter:brightness(0.5)">${iconB2_3()}</button>
 </div>
 </div>
 </div>
</div>
  `)


case "b2_4":
  return(`
  <div id="main_container" > 
  <div class="card-b2_4 ${codes.size} ${codes.color} ${codes.position}"  id="cardAnim"> 
  <div class="content_box" style="justify-Content:flex-start; align-Items:flex-start;padding:2rem 4rem">
  <div class="cross_icon" > ${Modal_cross()}  </div>
  <div class="icon_style" style="margin-Top:1rem"><img src=${codes.logoUrl}></img></div>
  <div>
   <h2>${contentArray[0]}</h2>
  <div>${contentArray[1]}</div>
  </div>
  <div style="display:flex;gap:0.9rem" >
  <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
  <path d="M17 3C19.7581 2.99083 22.4628 3.76017 24.8032 5.21959C27.1436 6.679 29.0246 8.76924 30.23 11.25C29.0172 13.725 27.1345 15.8102 24.7958 17.2686C22.4571 18.7269 19.7562 19.5001 17 19.5001C14.2438 19.5001 11.5429 18.7269 9.20422 17.2686C6.86552 15.8102 4.98279 13.725 3.77 11.25C4.97543 8.76924 6.85645 6.679 9.19682 5.21959C11.5372 3.76017 14.2419 2.99083 17 3ZM17 0C13.4382 0.00205301 9.95949 1.07623 7.01663 3.08272C4.07377 5.08922 1.80305 7.93511 0.5 11.25C1.80131 14.5661 4.07161 17.4131 7.01485 19.4199C9.9581 21.4266 13.4377 22.5 17 22.5C20.5623 22.5 24.0419 21.4266 26.9851 19.4199C29.9284 17.4131 32.1987 14.5661 33.5 11.25C32.197 7.93511 29.9262 5.08922 26.9834 3.08272C24.0405 1.07623 20.5618 0.00205301 17 0ZM17 7.5C17.7417 7.5 18.4667 7.71993 19.0834 8.13199C19.7001 8.54404 20.1807 9.12971 20.4645 9.81494C20.7484 10.5002 20.8226 11.2542 20.6779 11.9816C20.5332 12.709 20.1761 13.3772 19.6517 13.9017C19.1272 14.4261 18.459 14.7832 17.7316 14.9279C17.0042 15.0726 16.2502 14.9984 15.5649 14.7145C14.8797 14.4307 14.294 13.9501 13.882 13.3334C13.4699 12.7167 13.25 11.9917 13.25 11.25C13.2503 10.2555 13.6454 9.30185 14.3486 8.59864C15.0518 7.89544 16.0055 7.50027 17 7.5ZM17 4.5C15.665 4.5 14.3599 4.89588 13.2499 5.63758C12.1399 6.37928 11.2747 7.43349 10.7638 8.66689C10.2529 9.90029 10.1192 11.2575 10.3797 12.5669C10.6402 13.8762 11.283 15.079 12.227 16.023C13.171 16.967 14.3738 17.6098 15.6831 17.8703C16.9925 18.1308 18.3497 17.9971 19.5831 17.4862C20.8165 16.9753 21.8707 16.1101 22.6124 15.0001C23.3541 13.8901 23.75 12.585 23.75 11.25C23.7474 9.4606 23.0353 7.74525 21.7701 6.47995C20.5048 5.21465 18.7894 4.50265 17 4.5Z"/>
  </svg>
      <h3>${contentArray[2]}</h3></div>
  <div style="font-Size:16px">${contentArray[3]}</div>
  <div style="display:flex;gap:0.9rem">
  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 4.25L21 11V24.5H3V11L12 4.25ZM12 0.5L0 9.5V27.5H24V9.5L12 0.5Z"/>
  </svg>
  
  <h3>${contentArray[4]}</h3></div>
  <div style="font-Size:16px">${contentArray[5]}</div>
  <div class="button_row" style="margin:auto">
   <button id="button1" class="btn-link full ${codes.color}">${contentArray[6]}</button>
   <button id="button2" class="btn-link_white full">${contentArray[7]}</button>
   </div>
   </div>
  </div>
</div>
  `)


case "b3_1":
  return(`
  <div id="main_container" > 
  <div class="card-b3_1 ${codes.size} ${codes.position}"  id="cardAnim"> 
        <div class="cross_icon">
        ${Modal_cross()} 
        </div>
        <div class="icon_style" style="margin-Top:1rem"><img src=${codes.imgUrl}></img></div>
        <div class="content_box">
        <div style="margin-Top:-10rem">
          <img src=${codes.logoUrl}></img>
      </div>

        <div style="font-Weight:600">${contentArray[1]}</div>
          <div>${contentArray[2]}</div>
        <h2 style="line-Height:2.5rem">${contentArray[0]}</h2>
       
          <div>${contentArray[3]}</div>
          <div class="button_row">
            <button id="button1" class="btn-link_white half">${contentArray[4]}</button>
            <button id="button2" class="btn-link half  ${codes.color}">${contentArray[5]}</button>
          </div>
        </div>
      </div>
</div>
  `)

case "b3_2":
  return(`
  <div id="main_container" > 
  <div class="card-b3_2 ${codes.size} ${codes.color} ${codes.position}"  style="padding:0;align-Items:normal;justify-Content:space-between"  id="cardAnim"> 
  <div class="cross_icon" >${Modal_cross()}  </div>
  <div style="display:flex;flex-Direction:column; justify-Content:space-between;gap:6rem">
  <div style="display:flex;align-Items:center;flex-Direction:column;justify-Content:center;margin-Top:5rem">
  <div class="icon_style"  style="margin-Top:1rem;border-Radius:50%;position:absolute;top:-50px">
  <img src=${codes.logoUrl}></img>}</div>
  <h2>${contentArray[0]}</h2>
  <div>${contentArray[6]}</div>
  </div>
  <div style="display:flex;justify-Content:space-around; font-Size:36px;background-Color:white;height:150px;width:100%;align-Items:center">
  <button id="button1" class="b3_2_icons">  ${contentArray[1]}></button>
  <button id="button2" class="b3_2_icons"> ${contentArray[2]}></button>
  <button id="button3" class="b3_2_icons">  ${contentArray[3]}></button>
  <button id="button4" class="b3_2_icons"> ${contentArray[4]}></button>
  <button id="button5" class="b3_2_icons">  ${contentArray[5]}></button>
  </div>
  </div>
  </div>  
  </div>
  
  `)

  case "b3_3":
    return(`
    <div id="main_container"> 
    <div class="card-b3_3 ${codes.size}  ${codes.position}" style="text-align:left" id="cardAnim">
    <div style="display:flex;justify-Content:flex-start;flex-Direction:row;width:100%;gap:0.5rem;margin:1rem;padding-Left:1rem">
        <img style="width:40px" src=${codes.logoUrl}></img>

    <div style="
        color:#7D4AEA;
        font-Weight:700;
        margin-Top:0.5rem;
        align-Self: flex-start;
     " 
    >
      ${contentArray[4]}
    </div>
    </div>
    <div class="content_box">
      <div class="cross_icon">
      ${Modal_cross()}
      </div>
      <h2>${contentArray[0]}</h2>
      <div>${contentArray[1]}</div>
      <div class="button_row">
        <button id="button1"
          class="btn-link half  ${codes.color}">
          ${contentArray[2]}
        </button>
        <button id="button1" class="btn-link_white half">${contentArray[3]}</button>
      </div>
    </div>
  </div>
</div>
    `)

    case "b3_4":
      return(`
      <div id="main_container"> 
        <div class="card-b3_4 ${codes.size}  ${codes.position}"  id="cardAnim">
        <div class="cross_icon">
        ${Modal_cross()}
        </div>
        <div class="icon_style" >
            <img src=${codes.imgUrl}></img>
        </div>
        <input id="inputVal" placeholder=${contentArray[2]}/>
        <div class="content_box">
          <div style="margin-Top:-20rem">
              <img
                src=${codes.logoUrl}
              ></img>
          </div>
          <h2 style="line-Height: 2.5rem">${contentArray[0]}</h2>
          <div >${contentArray[1]}</div>
          <div class="button_row" style="margin-Top:5rem">
            <button id="button1" class="btn-link_white half">   ${contentArray[2]}</button>
            <button id="button2" class="btn-link half  + ${codes.color}">
              ${contentArray[3]}
            </button>
          </div>
        </div>
      </div> 
      </div>
       ` 
      )

      case "c1_1":
        return(`
        <div id="main_container"> 
        <div class="card-c1_1 c1_1_additionals ${codes.position} ${codes.size+" "+codes.color}" id="cardAnim">
        <div class="cross_icon" >  ${Modal_cross()} </div>
        <div class="icon_style"  style="display:flex;gap:3rem;justify-Content:flex-start">
        <div style="margin-left:2rem"><img style="border-Radius:50%;width:80px" src=${codes.logoUrl}></img></div>
        <div style="display:flex;flex-Direction:column;text-align:left">
         <div style="width:100%;font-Weight:600">${contentArray[0]}</div>
        <div style="width:100%"> ${contentArray[1]}</div>
        </div>
         </div>
         </div>
        </div> 
        `)


    }
  }
};
