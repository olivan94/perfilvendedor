import React from 'react'

class Form extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);
        
        script.addEventListener('load', () => {
            if(window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: '7903252',
                    formId: '8283d26e-535d-4a7e-bb4c-f6823ff0ffb9',
                    target: '#hubspotForm'
                })
                window.addEventListener('message', event => {
                    if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
                        let fechar = true;
                        this.props.closeModal(fechar);
                    }
                });
            }
        });
    }
    

    
    render() {
        return (
            <div>
              <div id="hubspotForm" className="hubspotForm"></div>
            </div>
        );
    }
}

export default Form;