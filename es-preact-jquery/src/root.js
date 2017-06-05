import { h, render } from 'preact';
import $ from 'jquery';

function con() {
  console.log($);
}

render((
  <div id="foo">
    <span>Hello, world!</span><br />
    <span>jQuery版本：{$().jquery}</span>
  </div>
), document.body);