import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class TreeView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: props.defaultCollapsed
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(...args) {
    this.setState({ collapsed: !this.state.collapsed });
    if (this.props.onClick) {
      this.props.onClick(...args);
    }
  }

  render() {
    const {
      collapsed = this.state.collapsed,
      className = '',
      treeViewClassName = '',
      childrenClassName = '',
      imgUrl,
      label,
      children
    } = this.props;

    let containerClassName = 'tree-view_children';
    if (collapsed) {
      containerClassName += ' tree-view_children-collapsed';
    }

    return (
      <div className={'tree-view ' + treeViewClassName}>
        <div className={'tree-view_item ' + className} onClick={this.handleClick}>
          <span className="node">
            <img alt="" src={imgUrl} width="20" height="20" className="mr-1"/>
            {label}
          </span>
        </div>
        <div className={containerClassName + ' ' + childrenClassName}>
          {collapsed ? null : children}
        </div>
      </div>
    );
  }
}

export default TreeView;
