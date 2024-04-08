const Notification = props => {
  //  Write your code here.
  const {className, iconUrl, message} = props;
  const containerClassName = {`container-element ${className}`};
  return (
    <div className={containerClassName}>
       <img className="icon" src={iconUrl}/>
       <p className="message">{message}</p>
    </div>
  )
};

const element = (
  //  Write your code here.
  <div class="container">
    <h1>Notifications</h1>
    <div class="notifications-container">
    <Notifications className="primary-bg" iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" 
    message="Information Message"/>

        <Notifications className="success-bg" iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" 
    message="Success Message"/>

        <Notifications className="warning-bg" iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" 
    message="Warning Message"/>

        <Notifications className="error-bg" iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" 
    message="Error Message"/>

  </div>
  </div>
 
)

ReactDOM.render(element, document.getElementById('root'))
