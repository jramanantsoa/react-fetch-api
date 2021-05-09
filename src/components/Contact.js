import  React,{Fragment} from 'react'

const Contact = ({ contacts }) => {
    return(
        <div>
          <center><h1>Contact List</h1></center>
          {contacts.map((contact) => (
              <Fragment>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
            <hr className="solid"/>
            </Fragment>
          ))}
        </div>
    )
}
export default Contact