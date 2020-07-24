// Initialize Firebase (ADD YOUR OWN DA
var firebaseConfig = {
  apiKey: "AIzaSyAQ26eOd1IVs0e9JFpGfpJcvv1hJAQtYEY",
  authDomain: "contactform-d52f8.firebaseapp.com",
  databaseURL: "https://contactform-d52f8.firebaseio.com",
  projectId: "contactform-d52f8",
  storageBucket: "contactform-d52f8.appspot.com",
  messagingSenderId: "123949679669",
  appId: "1:123949679669:web:0071cf5769fe88204c5d7c",
  measurementId: "G-6ZGQW0VNXK"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('message');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
    
  // Get values
  var name = getInputVal('name');
  var college = getInputVal('college');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, college, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, college, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    college:college,
    email:email,
    phone:phone,
    message:message
  });
}
