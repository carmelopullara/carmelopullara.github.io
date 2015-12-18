import React from 'react';

const SocialItem = (props) => (
  <li className={'socials__link-' + (props.reactKey + 1)}>
    <a itemProp="url" href={props.data.url} target="_blank">
      <i className={'icon-' + props.data.name}></i>
    </a>
  </li>
);

export default class SocialMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let socials = this.props.links;
    return(
      <ul className="main-block__socials">
        {this.props.links.map((link) => {
          return <SocialItem key={socials.indexOf(link)} reactKey={socials.indexOf(link)} data={link} />
        })}
      </ul>
    );
  }
}

