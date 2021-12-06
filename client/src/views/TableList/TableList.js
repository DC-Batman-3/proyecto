
import React from "react";



import { DiscussionEmbed } from 'disqus-react';



export default function TableList() {

  return (
    <div>

    <DiscussionEmbed
        shortname='scoutsad'
        config={
            {
                url: 'http://localhost:3000/user/foros-sociales',
                identifier: 'foros Actividades ID',
                title: 'Foros Actividades Titulo',
                language: 'es_MX'
            }
        }
    />
    </div>
  );
}
