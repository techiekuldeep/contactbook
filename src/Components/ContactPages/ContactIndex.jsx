import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";

class ContactIndex extends React.Component {
    render(){
        return <div>
                 <Header />
                  <div className="container" style={{ minHeight: "85vh" }}>
                    <div className="row py-3">
                      <div className="col-4 offset-2 row">
                           <AddRandomContact/>
                // handleAddRandomContact={this.handleAddRandomContact}
                     </div>
                     <div className="col-4">
                           <RemoveAllContact/>
                // handleAddRandomContact={this.handleAddRandomContact}
                     </div>
                     <div className="row py-2">
                           <AddContact/>
                // handleAddRandomContact={this.handleAddRandomContact}
                     </div>
                     <div className="row py-2">
                           <FavoriteContacts/>
                // handleAddRandomContact={this.handleAddRandomContact}
                     </div>
                     <div className="row py-2">
                           <GeneralContacts/>
                // handleAddContact={this.handleAddRandomContact}
                     </div>
                    </div>
                </div>
                <Footer/>
            </div>
    }
}


export default ContactIndex;