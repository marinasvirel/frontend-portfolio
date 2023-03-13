// ------
let slidrContainer = document.getElementById('slider');
let arrImg = "";
for (let i = 1; i <= 3; i++) {
arrImg+=`<img src="images/${i}.png">`;
}

slidrContainer.innerHTML = arrImg;
// -------

function slider(selector) {
  let slider = $(selector);
  let imgs = slider.children();
 
  slider
    .addClass("slider")
    .append('<a class="slider__arrow slider__arrow-left"></a>')
    .append('<div class="slider__slides"></div>')
    .append('<div class="slider__dots"></div>')
    .append('<a class="slider__arrow slider__arrow-right"></a>')
    .on("click", ".slider__arrow, .slider__dot", function (e) {
      e.preventDefault();
      let a = $(this);
      let active = slider.find(".slider__slide_active");
      let current = active.index();
      let next = current;
      let left = false;

      if (a.hasClass("slider__arrow-left")) {
        next = current - 1 >= 0 ? current - 1 : imgs.length - 1;
        left = true;
      } else if (a.hasClass("slider__arrow-right")) {
        next = (current + 1) % imgs.length;
      } else {
        next = a.index();
        left = next < current ? true : false;
      }
      if (current == next) {
        return;
      }
      // ---
      slider.append('<div class="slider__temp"></div>');

      let temp = slider.find(".slider__temp");
      let i = current;
      let j = 0;
      let animate = {};

      while (true) {
        let img = imgs
          .eq(i)
          .clone()
          .css({
            display: "inline-block",
            width: slider.css("width"),
          });

        if (left) {
          img.prependTo(temp);
        } else {
          img.appendTo(temp);
        }
        if (i == next) {
          break;
        }
        if (left) {
          i = i - 1 >= 0 ? i - 1 : imgs.length - 1;
          j--;
        } else {
          i = (i + 1) % imgs.length;
          j++;
        }
      }

      temp.css({
        width: (Math.abs(j) + 1) * 100 + "%",
        position: "absolute",
        top: 0,
      });
      if (left) {
        temp.css("left", j * 100 + "%");
        animate.left = 0;
      } else {
        temp.css("left", 0);
        animate.left = j * -100 + "%";
      }
      // ---
      active.removeClass("slider__slide_active");
      slider.find(".slider__dot_active").removeClass("slider__dot_active");
      imgs.eq(next).addClass("slider__slide_active");
      slider.find(".slider__dot").eq(next).addClass("slider__dot_active");

      // ---
      temp.animate(animate, 500, function () {
        temp.remove();
      });
      // ---
    });
  let slides = slider.children(".slider__slides");
  let dots = slider.children(".slider__dots");

  imgs
    .prependTo(slides)
    .each(function (i) {
      if (!i) {
        dots.append('<a class="slider__dot slider__dot_active"></a>');
      } else {
        dots.append('<a class="slider__dot"></a>');
      }
    })
    .addClass("slider__slide")
    .eq(0)
    .addClass("slider__slide_active");
}
slider("#slider");
