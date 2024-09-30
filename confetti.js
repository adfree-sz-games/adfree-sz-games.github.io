var maxParticleCount = 200; //set max confetti count
var particleSpeed = -4; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

(function () {
  startConfetti = startConfettiInner;
  stopConfetti = stopConfettiInner;
  toggleConfetti = toggleConfettiInner;
  removeConfetti = removeConfettiInner;
  var colors = [
    'DodgerBlue',
    'OliveDrab',
    'Gold',
    'Pink',
    'SlateBlue',
    'LightBlue',
    'Violet',
    'PaleGreen',
    'SteelBlue',
    'SandyBrown',
    'Chocolate',
    'Crimson',
  ];
  var streamingConfetti = false;
  var animationTimer = null;
  var particles = [];
  var waveAngle = 0;

  function resetParticle(particle, width, height) {
    particle.color = colors[(Math.random() * colors.length) | 0];
    particle.x = Math.random() * width;
    particle.y = Math.random() * height - height;
    particle.diameter = Math.random() * 10 + 5;
    particle.tilt = Math.random() * 10 - 10;
    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
    particle.tiltAngle = 0;
    return particle;
  }

  function startConfettiInner() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          return window.setTimeout(callback, 16.6666667);
        }
      );
    })();
    var canvas = document.getElementById('confetti-canvas');
    if (canvas === null) {
      canvas = document.createElement('canvas');
      canvas.setAttribute('id', 'confetti-canvas');
      canvas.setAttribute(
        'style',
        ' display:block;z-index:-1;pointer-events:none'
      );
      document.getElementById('overlay').appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      window.addEventListener(
        'resize',
        function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        },
        true
      );
    }
    var context = canvas.getContext('2d');
    while (particles.length < maxParticleCount)
      particles.push(resetParticle({}, width, height));
    streamingConfetti = true;
    if (animationTimer === null) {
      (function runAnimation() {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        if (particles.length === 0) animationTimer = null;
        else {
          updateParticles();
          drawParticles(context);
          animationTimer = requestAnimFrame(runAnimation);
        }
      })();
    }
  }

  function stopConfettiInner() {
    streamingConfetti = false;
  }

  function removeConfettiInner() {
    stopConfetti();
    particles = [];
  }

  function toggleConfettiInner() {
    if (streamingConfetti) stopConfettiInner();
    else startConfettiInner();
  }

  function drawParticles(context) {
    var particle;
    var x;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      context.beginPath();
      context.lineWidth = particle.diameter;
      context.strokeStyle = particle.color;
      x = particle.x + particle.tilt;
      context.moveTo(x + particle.diameter / 2, particle.y);
      context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
      context.stroke();
    }
  }

  function updateParticles() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var particle;
    waveAngle += 0.01;
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      if (!streamingConfetti && particle.y < -15) particle.y = height + 100;
      else {
        particle.tiltAngle += particle.tiltAngleIncrement;
        particle.x += Math.sin(waveAngle);
        particle.y +=
          (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
        particle.tilt = Math.sin(particle.tiltAngle) * 15;
      }
      if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
        if (streamingConfetti && particles.length <= maxParticleCount)
          resetParticle(particle, width, height);
        else {
          particles.splice(i, 1);
          i--;
        }
      }
    }
  }
})();
var start = false;
if (start === true) {
  startConfetti();
}

var maxSnowflakeCount = 200; // Set max snowflake count
var snowflakeSpeed = 2; // Set the snowflake fall speed
var startSnowfall; // Call to start snowfall animation
var stopSnowfall; // Call to stop adding snowflakes
var toggleSnowfall; // Call to start or stop the snowfall animation depending on whether it's already running
var removeSnowfall; // Call to stop the snowfall animation and remove all snowflakes immediately

(function () {
  startSnowfall = startSnowfallInner;
  stopSnowfall = stopSnowfallInner;
  toggleSnowfall = toggleSnowfallInner;
  removeSnowfall = removeSnowfallInner;

  var colors = ['#FFFFFF']; // Snowflakes will be white

  var streamingSnowfall = false;
  var animationTimer = null;
  var snowflakes = [];

  function resetSnowflake(snowflake, width, height) {
    snowflake.color = colors[0]; // White snowflake color
    snowflake.x = Math.random() * width;
    snowflake.y = Math.random() * height - height;
    snowflake.diameter = Math.random() * 5 + 2; // Adjust size of snowflakes
    return snowflake;
  }

  function startSnowfallInner() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          return window.setTimeout(callback, 16.6666667);
        }
      );
    })();

    var canvas = document.getElementById('snow-canvas');

    if (canvas === null) {
      canvas = document.createElement('canvas');
      canvas.setAttribute('id', 'confetti-canvas');
      canvas.setAttribute(
        'style',
        ' display:block;z-index:-1;pointer-events:none'
      );
      document.getElementById('overlay').appendChild(canvas);
      canvas.width = width;
      canvas.height = height;

      window.addEventListener(
        'resize',
        function () {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        },
        true
      );
    }

    var context = canvas.getContext('2d');

    while (snowflakes.length < maxSnowflakeCount)
      snowflakes.push(resetSnowflake({}, width, height));

    streamingSnowfall = true;

    if (animationTimer === null) {
      (function runAnimation() {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        if (snowflakes.length === 0) animationTimer = null;
        else {
          updateSnowflakes();
          drawSnowflakes(context);
          animationTimer = requestAnimFrame(runAnimation);
        }
      })();
    }
  }

  function stopSnowfallInner() {
    streamingSnowfall = false;
  }

  function removeSnowfallInner() {
    stopSnowfall();
    snowflakes = [];
  }

  function toggleSnowfallInner() {
    if (streamingSnowfall) stopSnowfallInner();
    else startSnowfallInner();
  }

  function drawSnowflakes(context) {
    var snowflake;
    for (var i = 0; i < snowflakes.length; i++) {
      snowflake = snowflakes[i];
      context.beginPath();
      context.arc(
        snowflake.x,
        snowflake.y,
        snowflake.diameter,
        0,
        Math.PI * 2,
        false
      );
      context.fillStyle = snowflake.color;
      context.fill();
    }
  }

  function updateSnowflakes() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var snowflake;

    for (var i = 0; i < snowflakes.length; i++) {
      snowflake = snowflakes[i];

      if (!streamingSnowfall && snowflake.y < -15) snowflake.y = height + 100;
      else {
        snowflake.y += snowflakeSpeed;
      }

      if (snowflake.x > width || snowflake.x < 0 || snowflake.y > height) {
        if (streamingSnowfall && snowflakes.length <= maxSnowflakeCount)
          resetSnowflake(snowflake, width, height);
        else {
          snowflakes.splice(i, 1);
          i--;
        }
      }
    }
  }
})();

var start2 = true;

if (start2 === true) {
  startSnowfall();
}
