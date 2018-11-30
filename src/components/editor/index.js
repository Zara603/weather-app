import React from "react";

import "./style.css";
class Editor extends React.Component {
  onFieldChange = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    console.log(fieldName, fieldValue);
    this.props.onChange(fieldName, fieldValue);
  };

  render() {
    const { unit, wind } = this.props;
    return (
      <section className="editor">
        <div>
          <div className="editor-input-label">
            <label htmlFor="Title of widget">Title</label>
          </div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title of widget"
            className="editor-input"
            onChange={e => this.onFieldChange(e)}
          />
        </div>
        <p>Temperature</p>
        <div className="editor-radio">
          <div>
            <input
              type="radio"
              id="fahrenheit"
              name="unit"
              value="fahrenheit"
              onChange={e => this.onFieldChange(e)}
              defaultChecked={true}
            />
            <label htmlFor="fahrenheit">°F</label>
          </div>

          <div>
            <input
              type="radio"
              id="celsius"
              name="unit"
              value="celsius"
              onChange={e => this.onFieldChange(e)}
            />
            <label htmlFor="celsius">°C</label>
          </div>
        </div>
        <p>Wind</p>
        <div className="editor-radio">
          <div>
            <input
              type="radio"
              id="windOn"
              name="wind"
              value="windOn"
              onChange={e => this.onFieldChange(e)}
              defaultChecked={true}
            />
            <label htmlFor="windOn">On</label>
          </div>

          <div>
            <input
              type="radio"
              id="windOff"
              name="wind"
              value="windOff"
              onChange={e => this.onFieldChange(e)}
            />
            <label htmlFor="windOff">Off</label>
          </div>
        </div>
      </section>
    );
  }
}

export default Editor;
