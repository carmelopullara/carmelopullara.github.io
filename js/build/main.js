"use strict";

var App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div",
      { id: "wrapper" },
      React.createElement(HomeSection, { name: "Carmelo Pullara" }),
      React.createElement(AboutSection, null)
    );
  }
});

var Centrize = React.createClass({
  displayName: "Centrize",

  render: function render() {
    return React.createElement(
      "div",
      { className: "centrize" },
      React.createElement(
        "div",
        { className: "v-center" },
        React.createElement(
          "div",
          { classNamw: "container" },
          this.props.children
        )
      )
    );
  }
});

var HomeSection = React.createClass({
  displayName: "HomeSection",

  render: function render() {
    return React.createElement(
      "section",
      { id: "home" },
      React.createElement(HomeContent, { name: this.props.name, intro: "Hi, my name is:" })
    );
  }
});

var HomeContent = React.createClass({
  displayName: "HomeContent",

  render: function render() {
    var letters = [];
    for (var i = 0; i < this.props.name.length; i++) {
      var foo = { id: i, letter: this.props.name[i] };
      letters.push(foo);
    };
    return React.createElement(
      Centrize,
      null,
      React.createElement(
        "div",
        { className: "welcome-box" },
        React.createElement(
          "p",
          { id: "intro" },
          React.createElement(
            "span",
            null,
            this.props.intro
          )
        ),
        React.createElement(
          "div",
          { className: "full-name" },
          React.createElement(Borders, null),
          React.createElement(
            "h2",
            { className: "text-to-animate" },
            letters.map(function (elem) {
              return React.createElement(
                "span",
                { className: 'letter-' + (elem.id + 1), key: elem.id },
                elem.letter
              );
            })
          )
        ),
        React.createElement(
          "p",
          { id: "desc" },
          React.createElement(
            "span",
            { className: "first" },
            "Full Stak Developer. "
          ),
          React.createElement(
            "span",
            { className: "second" },
            "JavaScript Addicted."
          )
        ),
        React.createElement(SocialMenu, { links: socials })
      )
    );
  }
});

var Borders = React.createClass({
  displayName: "Borders",

  render: function render() {
    return React.createElement(
      "div",
      { className: "borders" },
      React.createElement("div", { className: "line-top" }),
      React.createElement("div", { className: "line-right" }),
      React.createElement("div", { className: "line-bottom" }),
      React.createElement("div", { className: "line-left" })
    );
  }
});

var SocialItem = React.createClass({
  displayName: "SocialItem",

  render: function render() {
    return React.createElement(
      "li",
      { id: 'social-link-' + (this.props.reactKey + 1), className: this.props.data.name },
      React.createElement(
        "a",
        { href: this.props.data.url, target: "_blank" },
        React.createElement("i", { className: 'icon-' + this.props.data.name })
      )
    );
  }
});

var SocialMenu = React.createClass({
  displayName: "SocialMenu",

  render: function render() {
    return React.createElement(
      "ul",
      { className: "nav", id: "socials" },
      this.props.links.map(function (link) {
        return React.createElement(SocialItem, { key: socials.indexOf(link), reactKey: socials.indexOf(link), data: link });
      })
    );
  }
});

var AboutSection = React.createClass({
  displayName: "AboutSection",

  render: function render() {
    return React.createElement(
      "section",
      { id: "about" },
      React.createElement(AboutContent, null)
    );
  }
});

var AboutContent = React.createClass({
  displayName: "AboutContent",

  render: function render() {
    return React.createElement(
      Centrize,
      null,
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "col-md-5" },
          React.createElement(AboutText, null)
        ),
        React.createElement(
          "div",
          { className: "col-md-7 hidden-sm visible-md-block visible-lg-block" },
          React.createElement(
            "div",
            { className: "about-icon" },
            React.createElement(ReactIcon, null)
          )
        )
      )
    );
  }
});

var AboutText = React.createClass({
  displayName: "AboutText",

  render: function render() {
    return React.createElement(
      "div",
      { className: "about-text" },
      React.createElement(
        "h1",
        null,
        "Who Am I?"
      ),
      React.createElement(
        "p",
        null,
        "I'm a 23 years old freelance Full Stack Developer based in Favara, Italy."
      ),
      React.createElement(
        "p",
        null,
        "Currently I'm working as author of premium WordPress themes on ThemeForest, with the username \"",
        React.createElement(
          "a",
          { href: "http://themeforest.net/user/CodePark", target: "_blank" },
          "CodePark"
        ),
        "\"."
      ),
      React.createElement(
        "p",
        null,
        "I'm primarily focused on JavaScript, both front-end and back-end (Node.js). I like to develop web and mobile applications using modern frameworks, such as React (+ React Native), Express, Meteor and Angular."
      ),
      React.createElement(
        "p",
        null,
        "I am passionate about technology, startups, cinema, music and science."
      ),
      React.createElement(
        "ul",
        { className: "nav nav-pills" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "mailto:carmelo@pullara.me", targer: "_blank", className: "btn" },
            "Email me"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "http://themeforest.net/user/CodePark", targer: "_blank", className: "btn" },
            "View my works"
          )
        )
      )
    );
  }
});

var socials = [{ name: 'twitter', url: 'https://twitter.com/carmelopullara' }, { name: 'github', url: 'https://github.com/carmelopullara' }, { name: 'linkedin', url: 'http://linkedin.com/in/carmelopullara' }, { name: 'gplus', url: 'https://google.com/+carmelopullara' }, { name: 'angellist', url: 'https://angel.co/carmelo' }, { name: 'stackoverflow', url: 'http://stackoverflow.com/users/2352191/' }, { name: 'about-me', url: 'http://about.me/carmelopullara' }];

var ReactIcon = React.createClass({
  displayName: "ReactIcon",

  render: function render() {
    return React.createElement(
      "svg",
      { viewBox: "0 0 128 128" },
      React.createElement("path", { d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" })
    );
  }
});

React.render(React.createElement(App, null), document.body);