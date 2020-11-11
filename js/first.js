 //  assimant   1
 // question1- Write a program that allow to user enter number then printit
 function q1() {
     let num = Number(prompt("enter num"));
     if (isNaN(num)) {
         alert("error")
     } else {
         alert(num)
     }
 }
 //  question2  Write a program that take number from user then print yes if that number can divide by 3
 function q2() {
     let num = Number(prompt("check if that number can divide by 3 \n Enter Number"));
     if (isNaN(num)) {
         alert("error input")
     } else {
         if (num !== null && num !== '' && num !== 0) {
             if (num % 3 == 0) {
                 alert("yes")
             } else {
                 alert("no")
             }
         } else {
             alert("Enter Number")
         }
     }
 }
 //  question3 Write a program that allows the user to insert 2 integers then print the max
 function q3() {
     let num1 = Number(prompt("insert 2 integers then print the max \n Enter The first Number"));
     let num2 = Number(prompt(" Enter The second Number"));
     if (isNaN(num1 && num2)) {
         alert("error input")
     } else {
         if (num1 !== null && num1 !== '' || num2 !== null && num2 !== '') {
             if (num1 > num2) {
                 alert("The first Number " + " " + num1 + " " + " is max ")
             } else {
                 alert(" The second Number " + " " + num2 + " " + " is max ")
             }
         } else {
             alert("Enter Number")
         }
     }
 }
 //  question4   Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
 function q4() {
     let num = Number(prompt("insert an integer then check it negative or positive. \n Enter The Number"));
     if (isNaN(num)) {
         alert("error input")
     } else {
         if (num !== null && num !== '') {
             if (num >= 0) {
                 alert("The  Number is = positive ")
             } else {
                 alert("The  Number is = negative ")
             }
         } else {
             alert("Enter Number")
         }
     }
 }
 //  question5 Write a program that take 3 integers from user then print the max element and the min element.
 function q5() {
     let num1 = Number(prompt("insert 3 integers and check max  and min element. \n Enter The Number"));
     let num2 = Number(prompt(" \n Enter The Number"));
     let num3 = Number(prompt(" \n Enter The Number"));
     if (isNaN(num1)) {
         alert("error input")
     } else {
         if (num1 !== null && num1 !== '' && num2 !== null && num2 !== '' && num3 !== null && num3 !== '') {
             let max = Math.max(num1, num2, num3)
             let min = Math.min(num1, num2, num3)
             alert("The therd Number " + " " + max + " " + " is max \n " + " The first Number " + " " + min + " " + " is minimam ")
         }
     }
 }
 //  question6 Write a program that allows the user to insert integer number thencheck If a number is oven or odd
 function q6() {
     let num = Number(prompt("insert integer number then check If a number is even or odd \n Enter The Number"));
     if (isNaN(num)) {
         alert("error input")
     } else {
         if (num !== null && num !== '') {
             if (num !== null && num !== '') {
                 if (num % 2 == 0) {
                     alert("The  Number is : even ")
                 } else {
                     alert("The  Number is : odd ")
                 }
             }
         }
     }
 }
 //  question7 Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonan
 function q7() {
     let num = prompt("insert character then if it is vowel chars (a,e,I,o,u)  then i tell you \n Enter The Number");
     if (num !== null && num !== '') {
         if (num == "u" || num == "e" || num == "a" || num == "i" || num == "o") {
             alert("you entered  :  vowel chars ")
         } else {
             alert("you entered  : consonan chars ")
         }
     }
 }
 //  question 8  Write a program that allows user to insert integer then print all numbers between 1 to that’s number
 function q8() {
     let num = Number(prompt(" insert integer then print all numbers between 1 to that’s number \n Enter The Number"));
     if (isNaN(num)) {
         alert("error input")
     } else {
         if (num !== null && num !== '') {
             console.log(" you entered number is " + num)
             for (i = 1; i <= num; i++) {
                 console.log(i + "\n ")
             }
         }
     }
 }
 //  question 9  Write a program that allows user to insert integer then print a multiplication table up to 12.
 function q9() {
     let num = Number(prompt(" insert integer then print a multiplication table up to 12.\n Enter The Number"));
     if (isNaN(num)) {
         alert("error input")
     } else {
         if (num !== null && num !== '') {
             console.log(" you entered number is " + num)
             for (i = 1; i <= 12; i++) {
                 console.log(i + "*" + num + "=" + i * num)
             }
         }
     }
 }
 //  question 10 Write a program that allows to user to insert number then print all even numbers between 1 to this number
 function q10() {
     let num = Number(prompt("insert number then print all even numbers between 1 to entered \n Enter The Number"));
     if (isNaN(num)) {
         alert("error input")
     } else {
         if (num !== null && num !== '') {
             console.log(" you entered number is " + num)
             if (num % 2 == 0) {
                 for (i = 2; i <= num; i += 2) {
                     console.log(i + "\n ")
                 }
             } else {
                 for (i = 1; i <= num; i += 2) {
                     console.log(i + "\n ")
                 }
             }
         }
     }
 }
 //  question 11 Write a program that take two integers then print the power
 function q11() {
     let num1 = Number(prompt("program that take two integers then print the power \n Enter The first Number"));
     let num2 = Number(prompt(" \n Enter The second Number"));
     if (isNaN(num1)) {
         alert("error input")
     } else {
         if (num1 !== null && num1 !== '' && num2 !== null && num2 !== '') {
             console.log(Math.pow(num1, num2));
         }
     }
 }
 //  question 12  Write a program to enter marks of five subjects and calculate total, average and percen tage.
 function q12() {
     let num1 = Number(prompt("enter marks of five subjects \n Enter The first Number"));
     let num2 = Number(prompt(" \n Enter The second Number"));
     let num3 = Number(prompt(" \n Enter The second Number"));
     let num4 = Number(prompt(" \n Enter The second Number"));
     let num5 = Number(prompt(" \n Enter The second Number"));
     let sum = num1 + num2 + num3 + num4 + num5
     if (isNaN(num1)) {
         alert("error input")
     } else {
         if (num1 !== null && num1 !== '' && num2 !== null && num2 !== '') {
             let sum = num1 + num2 + num3 + num4 + num5;
             let avr = sum / 5;
             let percen = (sum / 5) * 100;
             alert("the total of this 5 degre is  " + sum + " \n" + " the averg of this 5 degre is  " + avr + "\n " + " the averg of this 5 degre is  " + percen);
         }
     }
 }
 //  question 13  -Write a program to input month number and print number of days in that month.
 function q13() {
     let num = Number(prompt("input month number and print number of days \n Enter The first Number"));
     if (isNaN(num)) {
         alert("error input")
     } else {
         if (num !== null && num !== '') {
             if (num == "4" || num == "6" || num == "9" || num == "11") {
                 alert(" 30 day in this mounth")
             } else if (num == "2") {
                 alert(" 28 day in this mounth")
             } else {
                 alert(" 31 day in this mounth")
             }
         }
     }
 }


 //    assimant  2    dom


 var productNameIput = document.getElementById('productNameInpyt');
 var producturl = document.getElementById('producturlInput');
 var alerttttInput = document.getElementById("alertttt");
 // اضافة تحقق للادخال  عن طريق تجربة الكود في موقع     https://regex101.com/r/6Ks9pJ/2
 productNameIput.addEventListener("keyup", function() {
     validationinput(productNameIput.value)
 })

 function validationinput(prodname) {
     var regex = /^(^[A-Z][a-z]{2,6})$/;
     if (regex.test(prodname) == true) {
         productNameIput.classList.add("is-valid")
         productNameIput.classList.remove("is-invalid")
     } else {
         productNameIput.classList.add("is-invalid")
         productNameIput.classList.remove("is-valid")
     }
 }
 if (localStorage.getItem('ourbroduct') == null) {
     productlist = [];
 } else {
     productlist = JSON.parse(localStorage.getItem('ourbroduct'));
     dispalyproductlist()
 }
 var productlist;

 function objectss() {
     var aaa = "";
     if (productNameIput.value !== "" & producturl.value !== "") {
         document.getElementById('alertttt').innerHTML = "";
         var product = {
             name: productNameIput.value,
             url: producturl.value,
         };
         productlist.push(product)
         console.log(productlist)
         localStorage.setItem('ourbroduct', JSON.stringify(productlist))
         dispalyproductlist()
         productNameIput.value = ""
         producturl.value = ""
     } else {
         var aaa =
             `
     <div id="alertttt" class="alert alert-danger ">
    <h3 class=" text text-danger">warning</h3><h4 class="text text-dark" >input name and url</h4>
     </div>
       `
         document.getElementById('alertttt').innerHTML = aaa;
     }
 }

 function dispalyproductlist() {
     var cartona = '';
     for (var i = 0; i < productlist.length; i++) {
         cartona +=
             `
     <tr id="${i}">
     <td></<td>
                    <td id="pro${i}">${productlist[i].name}</<td>
     <td>${productlist[i].url}</<td>
     <td> <a class='btn btn-warning' href='${productlist[i].url}'>viste</a></<td> 
     <td><button  class='btn btn-danger'onclick = 'deleterow(${i})'>Delete</button></<td>
     <td><button id="${i}"  class='btn btn-danger'onclick = 'update("${productlist[i].name}")'>update</button></<td>
     <td><button id="${i}"  class='btn btn-danger'onclick = 'save("${productlist[i].name}")'>save</button></<td>

     </tr>
     `
     }
     document.getElementById('tablethml').innerHTML = cartona;
 }

 function update(name) {
     document.getElementById('productNameInpyt').innerHTML = "save"
     productlist = JSON.parse(localStorage.getItem('ourbroduct'));
     productlist.forEach(tabl => {
         if (tabl.name == name | tabl.name === name) {
             document.getElementById('productNameInpyt').value = tabl.name;
             document.getElementById('producturlInput').value = tabl.url;
             // 
             console.log(tabl)

         }
     });

 }

 function save(name) {
     productlist = JSON.parse(localStorage.getItem('ourbroduct'));
     productlist.forEach(tabl => {
         if (tabl.name == name | tabl.name === name) {
             tabl.name = document.getElementById('productNameInpyt').value;
             tabl.url = document.getElementById('producturlInput').value;
             // 
             console.log(tabl)
         }
     });
     localStorage.setItem('ourbroduct', JSON.stringify(productlist)); //put the object back
     dispalyproductlist()
 }
 //
 //function deleteindex(index) {
 //    productlist.splice(index);
 //    dispalyproductlist()
 //}
 //
 function deleterow(row) {
     productlist = JSON.parse(localStorage.getItem('ourbroduct'));
     productlist.pop(row)
     localStorage.setItem('ourbroduct', JSON.stringify(productlist)); //put the object back
     document.getElementById(row).innerHTML = "";
 }



 //    assimant  3 img carsul   dom 2 

 // container
 var lite = document.getElementById("lightbox-container");
 // all img in body
 var img1 = Array.from(document.getElementsByTagName("img"));
 var close = document.getElementById("close");
 var litephoto = document.getElementById("lightbox-item");
 var prev = document.getElementById("prev");
 var next = document.getElementById("next");
 // cunter for next and prev img
 var caunter = 0;
 // click to show img 
 for (let i = 0; i < img1.length; i++) {
     img1[i].addEventListener("click", function(eventInfo) {
         var imgsrc = eventInfo.target.src;
         console.log(imgsrc);
         lite.style.display = "flex";
         litephoto.style.cssText = `background-image: url(${imgsrc});`
     });
 }
 // close //  img
 close.addEventListener("click", function() {
     lite.style.display = "none"
 });
 // next img
 next.addEventListener("click", nextphoto);

 function nextphoto() {
     if (caunter == img1.length - 1) {
         caunter = -1;
     }
     caunter++;
     var imgsrc = img1[caunter].src;
     litephoto.style.cssText = `background-image: url(${imgsrc});`
 }
 //  preview img
 prev.addEventListener("click", prevphoto);

 function prevphoto() {
     if (caunter == 0) {
         caunter = img1.length;
     }
     caunter--;
     var imgsrc = img1[caunter].src;
     litephoto.style.cssText = `background-image: url(${imgsrc});`
 }
 close.addEventListener("keydown", function(e) {
     if (e.keyCode === 27) {
         console.log(e.keyCode)
     }
 });
 document.addEventListener("keydown", event => {
     if (event.keyCode == 27) {
         lite.style.display = "none"
     } else if (event.keyCode == 39) {
         nextphoto();
     } else if (event.keyCode == 37) {
         prevphoto();
     }
     // do something
 });
 document.addEventListener("keydown", event => {
     if (event.keyCode == 27) {
         lite.style.display = "none"
     }
 });





 //    assimant  4   validation
 var UserName = document.getElementById('UserName')
 var UserNamelable = document.getElementById('UserName-lb')
     // Email validationEmail

 UserName.addEventListener("keyup", function() {
     validationUserName(UserName.value)
 })

 function validationUserName(prodname) {
     let regex = /^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{6,15}$/;

     if (regex.test(prodname) == true) {
         UserName.classList.add("is-valid")
         UserName.classList.remove("is-invalid")
         UserNamelable.innerHTML = "";
     } else {
         UserName.classList.add("is-invalid")
         UserName.classList.remove("is-valid")
         UserNamelable.innerHTML = "6-15 alphanumeric login name ";
     }
 }


 var Email = document.getElementById('Email')
 var Emaillable = document.getElementById('Email-lab')
     // Email validationEmail

 Email.addEventListener("keyup", function() {
     validationEmail(Email.value)
 })

 function validationEmail(prodname) {
     let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
     if (regex.test(prodname) == true) {
         Email.classList.add("is-valid")
         Email.classList.remove("is-invalid")
         Emaillable.innerHTML = "";
     } else {
         Email.classList.add("is-invalid")
         Email.classList.remove("is-valid")
         Emaillable.innerHTML = "email addresses with names formatted as name  email @email.com ";
     }
 }





 var Password = document.getElementById('Password')
 var Passwordlable = document.getElementById('Password-lab')
     // Password validationPassword 

 Password.addEventListener("keyup", function() {
     validationPassword(Password.value)
 })

 function validationPassword(prodname) {
     let regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[~|!|@|#|\$|%|\^|&|*|]).{8,})\S$/;
     if (regex.test(prodname) == true) {
         Password.classList.add("is-valid")
         Password.classList.remove("is-invalid")
         Passwordlable.innerHTML = "";
     } else {
         Password.classList.add("is-invalid")
         Password.classList.remove("is-valid")
         Passwordlable.innerHTML = `
         password has a mini of 8 characters,
         at least 1 upper, 1 lower, and 1 number,
         and 1  non-alphanumeric with no spaces.
         `;
     }
 }


 var ConfPassword = document.getElementById('ConfPassword');
 var ConfPasswordlable = document.getElementById('ConfPassword-lab');
 // ConfPassword validationConfPassword
 ConfPassword.addEventListener("keyup", function() {
     validationConfPassword(ConfPassword.value)
 })
 var ConfPasswordlable = document.getElementById('ConfPassword-lab')

 function validationConfPassword(prodname) {
     let regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?([@|\.|#|\$|\^|&|\*|~|%]{3,})).{6,})\S$/;
     if (prodname !== Password.value) {

         ConfPasswordlable.innerHTML = "Passwords do not match";

     } else {
         ConfPassword.classList.add("is-valid")
         ConfPasswordlable.innerHTML = "";
     }

 }