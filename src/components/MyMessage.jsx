const  NyMessageko= ({ message }) => {
    if(message?.attachements?.length > 0){
        return (
            <img
                src={message.attachements[0].file}
                alt="message-attachement"
                className="message-image"
                style={{float: 'right'}}
            />
        )
    }
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white',backgroundcolor: '#3B2A50'}}>
            {message.text}
        </div>
    );
}

export default NyMessageko;