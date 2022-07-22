/*import React from 'react';
import {Link as DefaultLink} from 'react-router-dom'

export default function Link(props) {
    const {to, children} = props;

    return (
        <DefaultLink to={to}>{children}</DefaultLink>
    )
}


https://v5.reactrouter.com/web/guides/quick-start add changes to app.js, put router around and switch

  const [active, setActive] = useState('');

  const handleChange = (e) => {
    console.log(e);

    const { id } = e.target;

    if (id !== active) {
      setActive(id);
    }
  };
return(
 <div>
        <PlanBox
          heading="Basic"
          text="Includes basic usage of our platform."
          pricing="$19.00"
          subtext="per month"
          btnText="PICK PLAN"
          inputName="radio1"
          inputId="planBox1"
          onChange={handleChange}
          checked={active === 'planBox1'}
        />
        <PlanBox
          heading="Basic"
          text="Includes basic usage of our platform."
          pricing="$19.00"
          subtext="per month"
          btnText="PICK PLAN"
          inputName="radio1"
          inputId="planBox2"
          onChange={handleChange}
          checked={active === 'planBox2'}
        />
      </div>
)

*/
