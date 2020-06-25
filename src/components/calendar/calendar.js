import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CustomerCalendar() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <Calendar
      onChange={onChange}
      value={value}
    />
  );
}

export default CustomerCalendar;





// import React, { Component } from 'react';
// import Calendar from 'react-calendar';

// export default class CustomerCalendar extends Component {

//         state = {
//             date: new Date(),
//           }
         
//           onChange = date => this.setState({ date })


//     render() {
//         return (
//             <div>
//                 <Calendar
//                     onChange={this.onChange}
//                     value={this.state.date}
                    
//                 />
//             </div>
//         )
//     }
// }

