import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { alterColor } from 'actions/index';

class ColorForm extends Component {
  onSubmit(values) {
    for (var name in this.props.fields) {
      if (this.props.fields[name].dirty) {
        let newclr = this.props.color.clone();
        newclr[name](values[name]); //call Color function which alters color
        //pass that new color to our action creator to update state
        this.props.alterColor(this.props.idx, newclr);
      }
    }
  }

  render() {
    console.log('hereare my props now',this.props);
    const { fields: {red, green, blue, black, white, tone, hex }, handleSubmit } = this.props;

    let styles = {
      background: this.props.vals.hex,
      color: (this.props.color.light()) ? 'black' : 'white'
    };
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} style={styles}  >
        <div>
          <label>Color code</label>
          <input type="text" value={this.props.vals.hex}  {...hex} />
        </div>

        <div>
          <label>red</label>
          <input type="text" value={this.props.vals.red} {...red}/>
        </div>

        <div>
          <label>green</label>
          <input type="text" value={this.props.vals.green} {...green} />
        </div>

        <div>
          <label>blue</label>
          <input type="text" value={this.props.vals.blue} {...blue}/>
        </div>
        <div>
          <label>tone</label>
          <input type="text" value={this.props.vals.tone} {...tone}/>
        </div>
        <div>
          <label>black</label>
          <input type="text" value={this.props.vals.black} {...black}/>
        </div>

        <div>
          <label>white</label>
          <input type="text" value={this.props.vals.white} {...white}/>
        </div>

        <button type="submit">Update</button>
      </form>
    );
  }
}




export default reduxForm({
  form: 'ColorForm',
  fields:['hex','red','green', 'blue', 'black',
'white','tone']
}, null, {alterColor})(ColorForm);
