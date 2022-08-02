import React from 'react';
import ReactDOM from 'react-dom';
import { ArenguForm } from "react-arengu-forms"

const root = ReactDOM.createRoot(document.getElementById('header'));
root.render(
    <div class="content">
        <h1>Noister.</h1>
        <p>Contact us</p>
        <ArenguForm
            id="165943531422551424"
            hiddenFields={[
                {
                    key: 'hostname',
                    value: window.location.hostname,
                },
            ]}
        />
    </div>
);
