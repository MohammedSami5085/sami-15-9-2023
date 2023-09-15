
// question {1}

var arr = [];

arr[0] = "sami";
arr[1] = "akhter";
arr[2] = "husnain";
arr[3] = "khuwaja";
arr[4] = "junaid";
arr[5] = "sunny";
arr[6] = "shabbir";

console.log(arr);

// question {3}

var students = ["pencil"]

console.log(students)


// question {4}


var num = [10]

console.log(num)


// question {5}


var strnew = [true,false]

console.log(strnew)


// question {6}


var mixed = ["sami", false , 20 ,"pen" ,undefined];

console.log(mixed)

// question {7}


var qualifications = ["ssc","hsc","bcs","bs","b.com","ms","m.phill","phd"]


document.write(qualifications[0] + "<br>" + qualifications[1] + "<br>" + qualifications[2] + "<br>" + qualifications[3] + "<br>" + qualifications[4] + "<br>" + qualifications[5] + "<br>" + qualifications[6] + "<br>" + qualifications[7])

// question{8}

var totalmarks = 600

var scores = [320 , 450 , 550]

var mper = scores [0]/totalmarks * 100;

var jper = scores [1]/totalmarks * 100;

var tper = scores [2]/totalmarks * 100;

document.write("<br>" + "<br>" + "scores of michale is 320. percentage ;" + mper, "<br>" + 
"scores of jhon is 450 percentage;" + jper, "<br>" + "Score of Tony is 550. Percentage ;" + tper)

// question {9.A}

var colors = ["Red", "Green", "Blue"];

document.write("Original Array: " + colors + "<br>");

var newColor = prompt("Enter a color to add to the beginning:");

colors.unshift(newColor);


// queston {9.B}

var colors = ["Red", "Green", "Blue"];

var newColor = prompt("Enter a color to add to the end:");

colors.push(newColor);

document.write("Updated Array (Added to the End): " + colors);


// question {9.c}


var colors = ["Red", "Green", "Blue"];

document.write("Original Array: " + colors + "<br>");

var newColor1 = prompt("Enter the first color to add to the beginning:");

var newColor2 = prompt("Enter the second color to add to the beginning:");

colors.unshift(newColor2, newColor1);

document.write("Updated Array (Added Two Colors to the Beginning): " + colors);

// question {9.D}

var colors = ["Red", "Green", "Blue"];

document.write("Original Array: " + colors + "<br>");

colors.shift();

document.write("Updated Array (First Color Deleted): " + colors);

// question {9.E}


var colors = ["Red", "Green", "Blue"];

document.write("Original Array: " + colors + "<br>");

colors.pop();

document.write("Updated Array (Last Color Deleted): " + colors);

// question {9.F}

var colors = ["Red", "Green", "Blue"];

document.write("Original Array: " + colors + "<br>");

var index = prompt("Enter the index at which you want to add a color:");

index = parseInt(index); 

var newColor = prompt("Enter the color name to add at the specified index:");

if (index >= 0 && index <= colors.length) {colors.splice(index, 0, newColor);
    document.write("Updated Array (Color Added at Desired Position): " + colors);
    } else {document.write("Invalid index. Please enter a valid index."); }

    // question {9.G}

    var colors = ["Red", "Green", "Blue"];

    document.write("Original Array: " + colors + "<br>");

    var startIndex = prompt("Enter the index to start deleting from:");
    startIndex = parseInt(startIndex);

    var deleteCount = prompt("Enter the number of colors to delete:");
    deleteCount = parseInt(deleteCount);

    if (startIndex >= 0 && startIndex < colors.length && deleteCount >= 0 && startIndex + deleteCount <= colors.length) {


        var deletedColors = colors.slice(startIndex, startIndex + deleteCount);

        var insertIndex = prompt("Enter the index to add the deleted colors back:");

        if (insertIndex >= 0 && insertIndex <= colors.length) {

            colors.splice(startIndex, deleteCount);

            Array.prototype.splice.apply(colors, [insertIndex, 0].concat(deletedColors));

            document.write("Updated Array (Colors Deleted and Added at Desired Position): " + colors);
      } else {document.write("Invalid insert index. Please enter a valid index.");
    }
  } else { document.write("Invalid inputs. Please enter valid index and delete count.");
}


// question {10}

var studentScores = [85, 92, 78, 95, 88, 76];

console.log("Original Array:", studentScores);

studentScores.sort(function(a, b) {
    return a - b;
  });

  console.log("Sorted Array (Ascending Order):", studentScores);


//   question {11}

var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];


var selectedCities = [];


selectedCities = cities.slice(0, 3);


console.log("Selected Cities:", selectedCities);




// question {12}


var arr = ["This", "is", "my", "cat"];


var singleString = arr.join(" ");


console.log(singleString);


// queston {13}

var fifoQueue = [];


fifoQueue.push("Value1");
fifoQueue.push("Value2");
fifoQueue.push("Value3");


var firstValue = fifoQueue.shift();
var secondValue = fifoQueue.shift();
var thirdValue = fifoQueue.shift();


console.log("First Value:", firstValue);
console.log("Second Value:", secondValue);
console.log("Third Value:", thirdValue);


// question {14}



var lifoStack = [];


lifoStack.push("Value1");
lifoStack.push("Value2");
lifoStack.push("Value3");


var lastValue = lifoStack.pop();
var secondLastValue = lifoStack.pop();
var thirdLastValue = lifoStack.pop();


console.log("Last Value:", lastValue);
console.log("Second Last Value:", secondLastValue);
console.log("Third Last Value:", thirdLastValue);


// question {15}



var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


document.write('<select id="manufacturerSelect">');


for (var i = 0; i < manufacturers.length; i++) {
  document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}


document.write('</select>');