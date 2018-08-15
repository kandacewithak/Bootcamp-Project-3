
// Project Three - celebrity tweet generator

// need to create an object that will hold two arrays that each contain celebrity tweet objects

const tweets = {
  inspirational: [
    { celebrity: "oprah",
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@oprah",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'kanye',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@kanye",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'ellen',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@ellen",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'obama',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@obama",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'jason',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@jason",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'biebs',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@biebs",
      url: "https://picsum.photos/100"
    }
  ],

  motivational: [
    { celebrity: 'trump',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@trump",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'britney',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@britney",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'kanye',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@kanye",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'roseanne',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@roseanne",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'chrissy',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@chrissy",
      url: "https://picsum.photos/100"
    },
    { celebrity: 'simon',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@simon",
      url: "https://picsum.photos/100"
    }
  ]
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];




$(document).ready(function() {
  

  // user comes to the site to enter a name and answer two questions; need to listen for the user to submit the form

  $('form').on('submit', function(event){
    

    // prevent the default behaviour of the form on submit

      event.preventDefault();

    // create variables to hold the user's input

      const name = $('#name').val().trim();
      const pronoun = $('input[name=pronoun]:checked').val();
      const tweetPreference = $('input[name=tweetStyle]:checked').val();

    // create a variable to select the array that matches the user's tweet type choice
  
      const userArray = tweets[tweetPreference];

    // use a function that generates a random number and then uses that random number to choose an object within the array (randomly)

      const random = function(array){
        const number = Math.floor(Math.random() * array.length);
        return array[number];
      }
      const randomTweet = random(userArray);

      // create variables to store the random celebrity name and their tweet string

      const celebrityName = randomTweet.celebrity;
      const celebrityTweet = randomTweet.tweet(name);
      const celebrityPic = $('<img>').attr('src', randomTweet.url);
    
      // when the responses are submitted, a random tweet is generated about the user (using their name); display that info on the page

      $('.tweetResults').html(celebrityName);
      $('.tweetResults').append(celebrityTweet);
      $('.tweetResults').append(celebrityPic);

      $('#name').val('');

      // make a function that will generate the current date and time

      const currentDateTime = new Date();
      const day = currentDateTime.getDate(); // getDate gives the day (between 1 and 31)
      const monthNumber = currentDateTime.getMonth(); // getMonth gives the month in a number (between 0 and 11)
      const monthWord = months[monthNumber]; // using the months array to get the name of the month
      const year = currentDateTime.getFullYear();

      $('.tweetResults').append(`<h4>${day}${monthWord}${year}</h4>`);

  });



  // user can choose to choose again or submit again to receive another tweet



});