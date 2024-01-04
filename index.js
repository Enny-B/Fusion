console.log('hello');


document.addEventListener('DOMContentLoaded', function () {
  const circles = document.querySelectorAll('.circle');
  let circleIndex = 0; // Set the initial index to 0 for the first circle


  // Function to update details based on the provided index
  function updateDetails(index) {
    const messageCont = document.querySelector(".other");
    const subName = messageCont.querySelector("#subName");
    const messageElement = messageCont.querySelector(".message");
    const link = messageCont.getAttribute("href");

    if (index >= 0 && index < dataArray.length) {
      const { name, message, link } = dataArray[index];
      console.log(`Name: ${name}`);
      console.log(`Message: ${message}`);
      console.log(`Link: ${link}`);

      subName.innerText = name;
      messageElement.innerHTML = message;
      messageCont.setAttribute("href", link);

      const afterElement = document.querySelector('underline');
      // afterElement.style.width = `${100 * ((index + 1)/4)}%`;
    } else {
      console.log(`Invalid index ${index}`);
    }

  }


  // Initial update for the first circle index
  updateDetails(circleIndex);

  circles.forEach(function (circle, index) {
    circle.addEventListener('click', function () {
      
      // Remove 'active' class from all circles
      circles.forEach(function (c) {
        c.classList.remove('active');
      });
      console.log('click')

      // Add 'active' class to the clicked circle
      circle.classList.add('active');

      // Log the index of the clicked circle
      console.log('Index of clicked circle:', index);
      circleIndex = index;
      console.log(circleIndex);

      // Update details for the clicked circle index
      updateDetails(circleIndex);
    });
  });
});





const dataArray = [
  {
    name: 'Ashford Express Logistics',
    message: [
      'Ashford Logistics is a global logistics company that provides a wide range of services, including freight forwarding, warehousing, and transportation.<br><br>',
      'We take pride in our dedication to reliability, ensuring that we consistently deliver on your needs and expectations. Our commitment to being dependable means you can count on us to provide consistent, high-quality service, meeting and exceeding your requirements every step of the way.'
    ],
    link: 'https://astonishing-semolina-a3ab90.netlify.app/#'
  },
  {
    name: 'PAL',
    message: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum a mollitia quaerat, maiores voluptate numquam ut magnam asperiores voluptas omnis quod! Maxime .<br><br>',
      'onem earum molestias eos iusto, optio hic laborum aspernatur vero libero esse delectus enim, repellat doloremque eaque? Quibusdam reiciendis quae dignissimos, quis ipsum labore hic libero quas cumque consectetur iusto praesentium distinctio provident facilis soluta magnam nisi suscipit nihil totam omnis quam tenetur quod quos iure! Tempore quibus'
    ],
    link: 'https://paljets.com/about-us/'
  },
  {
    name: 'Bob',
    message: [
      'vitae quod! Doloribus exercitationem earum molestias eos iusto, optio hic laborum aspernatur vero libero esse delectus enim, repellat doloremque eaque? Quibusdam.<br><br>',
      'reiciendis quae dignissimos, quis ipsum labore hic libero quas cumque consectetur iusto praesentium distinctio provident facilis soluta magnam nisi suscipit nihil totam omnis quam tenetur quod quos iure! Tempore quibusdam, perferendis quisquam alias ut delectus.'
    ],
    link: 'https://example.com/bob'
  },
  {
    name: 'Xantha',
    message: [
      'earum ut quia incidunt iste aperiam. Quibusdam aperiam maiores sint inventore ullam, odio voluptas, veniam quos tempora vero illo accusamus fugiat voluptates vitae quod! Doloribus exercitati.<br><br>',
      'We take pride in our dedication to reliability, ensuring that we consistently deliver on your needs and expectations. Our commitment to being dependable means you can count on us to provide consistent, high-quality service, meeting and exceeding your requirements every step of the way.'
    ],
    link: 'https://example.com/alice'
  },
];

