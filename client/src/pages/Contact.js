import React from "react";

function Contact() {
    return (
        <form class="container">
            <div class="form-group">
                <label for="exampleName">Name</label>
                <input type="name" class="form-control" id="exampleName"/>
            </div>
            <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleMessage">Message</label>
                <textarea class="form-control" id="exampleMessage" rows="4"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default Contact;