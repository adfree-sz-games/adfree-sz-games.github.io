function getCookie(name) {
  const cookieName = name + '=';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
}

let Setting14b = getCookie('PagePrevent');

function checkPageClose(event) {
  event.returnValue = 'Prevent Page Close Is Active, You Can Click Off Of This';
}
function checkPageClose2() {
  if (Setting14b === 'true') {
    window.onbeforeunload = function (event) {
      // return a string to prevent the page from closing
      event.preventDefault();
      return 'Prevent Page Close Is Active, You Can Click Off Of This';
    };
    window.addEventListener('beforeunload', checkPageClose);
  }
  if (Setting14b === 'false') {
  }
}
console.log('CookiePAGE Value: ' + Setting14b + 'SzGames-Scripts Loaded');
checkPageClose2();

//CLOAK

let tabData = {};
const tab = localStorage.getItem('tab');

if (tab) {
  try {
    tabData = JSON.parse(tab);
  } catch (e) {
    console.log('Error parsing tab data from localStorage', e);
  }
} else {
}

const settingsDefaultTab = {
  title: 'Settings - Sz Games',
  icon: 'https://adfree-sz-games.github.io/G.png',
};

const setTitle = (title = '') => {
  document.title = title || settingsDefaultTab.title;
  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }
  localStorage.setItem('tab', JSON.stringify(tabData));
};

const setFavicon = (url) => {
  const faviconLink = document.querySelector("link[rel='icon']");

  // Try to load the URL as an image
  const img = new Image();
  img.src = url;
  img.onload = () => {
    faviconLink.href = url;
    if (url) {
      tabData.icon = url;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem('tab', JSON.stringify(tabData));
  };

  img.onerror = () => {
    // If the URL is not an image, use Google's Favicon API
    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${url}`;
    faviconLink.href = faviconUrl || settingsDefaultTab.icon;
    if (url) {
      tabData.icon = faviconUrl;
    } else {
      delete tabData.icon;
    }
    localStorage.setItem('tab', JSON.stringify(tabData));
  };
};

const resetTab = () => {
  setTitle();
  setFavicon();

  localStorage.setItem('tab', JSON.stringify({}));
};

if (tabData.title) {
  document.title = tabData.title;
}

if (tabData.icon) {
  const faviconLink = document.querySelector("link[rel='icon']");
  faviconLink.href = tabData.icon;
}

//PANIC
let PANIC = localStorage.getItem('panic');

if (PANIC) {
  document.addEventListener('keydown', function (event) {
    if (event.key === '\\') {
      // Backslash key was pressed
      console.log('PANIC');
      window.location = PANIC;
    }
  });
} else {
  console.log('clear');
}

function panicURL() {
  let URL3 = document.getElementById('url-target2').value;

  if (URL3.includes('https://')) {
    localStorage.setItem('panic', URL3);

    PANIC = localStorage.getItem('panic');
  } else {
    localStorage.setItem('panic', 'https://' + URL3);

    PANIC = localStorage.getItem('panic');
  }
}

function clearPANIC() {
  localStorage.clear('panic');

  console.log('clear');
  PANIC = localStorage.getItem('panic');
}

const _0x4482a8 = _0xa809;
(function (_0x4ef06e, _0x2f4dec) {
  const _0x576ea8 = _0xa809,
    _0x448bac = _0x4ef06e();
  while (!![]) {
    try {
      const _0x1713ea =
        parseInt(_0x576ea8(0x16a)) / 0x1 +
        -parseInt(_0x576ea8(0x18e)) / 0x2 +
        (parseInt(_0x576ea8(0x170)) / 0x3) *
          (-parseInt(_0x576ea8(0x186)) / 0x4) +
        -parseInt(_0x576ea8(0x18a)) / 0x5 +
        -parseInt(_0x576ea8(0x188)) / 0x6 +
        parseInt(_0x576ea8(0x177)) / 0x7 +
        parseInt(_0x576ea8(0x179)) / 0x8;
      if (_0x1713ea === _0x2f4dec) break;
      else _0x448bac['push'](_0x448bac['shift']());
    } catch (_0x4229ab) {
      _0x448bac['push'](_0x448bac['shift']());
    }
  }
})(_0x155a, 0xc714b);
function _0xa809(_0x17f3c7, _0x534530) {
  const _0x7c1e66 = _0x155a();
  return (
    (_0xa809 = function (_0x59482f, _0x245fd1) {
      _0x59482f = _0x59482f - 0x16a;
      let _0x22bb34 = _0x7c1e66[_0x59482f];
      return _0x22bb34;
    }),
    _0xa809(_0x17f3c7, _0x534530)
  );
}
const _0x26a236 = (function () {
    let _0x599249 = !![];
    return function (_0x3867e1, _0x37972e) {
      const _0x3521e6 = _0x599249
        ? function () {
            const _0x1deb9f = _0xa809;
            if (_0x37972e) {
              const _0x48a817 = _0x37972e[_0x1deb9f(0x182)](
                _0x3867e1,
                arguments
              );
              return (_0x37972e = null), _0x48a817;
            }
          }
        : function () {};
      return (_0x599249 = ![]), _0x3521e6;
    };
  })(),
  _0x7b83f9 = _0x26a236(this, function () {
    const _0xe81952 = _0xa809;
    return _0x7b83f9[_0xe81952(0x183)]()
      [_0xe81952(0x17e)](_0xe81952(0x17a))
      [_0xe81952(0x183)]()
      [_0xe81952(0x17d)](_0x7b83f9)
      ['search'](_0xe81952(0x17a));
  });
function _0x155a() {
  const _0x45becb = [
    'createElement',
    '711400smBNSr',
    'appendChild',
    '{}.constructor(\x22return\x20this\x22)(\x20)',
    'info',
    '1714570KKdKQk',
    '20254cJIgMO',
    'top',
    'textContent',
    'table',
    'body',
    'https://adfree-sz-games.github.io',
    '3182499qQTXcq',
    'onclick',
    'Error\x20accessing\x20iframe\x20parent\x20domain:',
    'includes',
    'return\x20(function()\x20',
    'open',
    'hostname',
    '2202158jAIfCi',
    'szgames.net',
    '23980864XuxwgE',
    '(((.+)+)+)+$',
    'length',
    'some',
    'constructor',
    'search',
    'addEventListener',
    'log',
    'referrer',
    'apply',
    'toString',
    'trace',
    'exception',
    '4ThvoFO',
    'console',
    '2739738hJzdqB',
  ];
  _0x155a = function () {
    return _0x45becb;
  };
  return _0x155a();
}
_0x7b83f9();
