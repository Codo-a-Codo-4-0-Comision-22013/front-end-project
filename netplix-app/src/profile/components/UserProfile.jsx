import React from 'react';
import { Link } from 'react-router-dom';

export class UserProfile extends React.Component {
    constructor(profile){
        super(profile);
        this.state = {
            name: profile.name ?? 'Sin perfíl',
            img: profile.image ?? 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
            link: profile.link ?? '#'
        };
        console.log('this.state');
        console.log(this.state);
    }

    render(){
        return (
            <div class="m-4 inline-block text-center hover:text-slate-600">
              <Link
                to={this.state.link}
                className="mt-2 transition-colors"
                >
                <p class="mb-4">
                  <img class="w-20 h-20 inline-block" src={this.state.img} />
                </p>
                {this.state.name}
              </Link>
            </div>
        );
    }
};
