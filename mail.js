
//   const firebaseConfig = {
//     apiKey: "AIzaSyDjGS97WEm6Y3B-YDAsyCO650DdMiSoLbA",
//     authDomain: "ku-cse-fest-23.firebaseapp.com",
//     databaseURL: "https://ku-cse-fest-23-default-rtdb.firebaseio.com",
//     projectId: "ku-cse-fest-23",
//     storageBucket: "ku-cse-fest-23.appspot.com",
//     messagingSenderId: "680079040681",
//     appId: "1:680079040681:web:42d1efb5c1f8ba022889b8",
//     measurementId: "G-G1P8H08P8C"
//   };


//  app.initializeApp(firebaseConfig);
//  constapp.database().ref('')



const firebaseConfig = {
    
    
        apiKey: "AIzaSyDjGS97WEm6Y3B-YDAsyCO650DdMiSoLbA",
        authDomain: "ku-cse-fest-23.firebaseapp.com",
        databaseURL: "https://ku-cse-fest-23-default-rtdb.firebaseio.com",
        projectId: "ku-cse-fest-23",
        storageBucket: "ku-cse-fest-23.appspot.com",
        messagingSenderId: "680079040681",
        appId: "1:680079040681:web:42d1efb5c1f8ba022889b8",
        measurementId: "G-G1P8H08P8C"
    


  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 8000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };