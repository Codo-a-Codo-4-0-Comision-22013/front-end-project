import React from 'react';
import { UserProfile } from '../components/UserProfile';
import { AddProfile } from '../components/AddProfile';

export class SelectProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profiles: [
                {
                    name: 'Scarlet...',
                    img: 'https://s03.s3c.es/imag/_v0/770x420/e/b/2/490x_scarlett-johansson-sexy770.jpg'
                },
                {
                    name: 'Doctor Strange',
                    img: 'https://i0.wp.com/auralcrave.com/wp-content/uploads/2022/05/Doctor-Strange-Third-Eye-1280x720-1.jpg?fit=1200%2C675&ssl=1'
                },
                {
                    name: 'Iron Man',
                    img: 'https://es.web.img3.acsta.net/r_654_368/newsv7/20/05/07/12/52/3980724.jpg'
                }
            ]
        };
    }

    componentDidMount(){}

    handleClick(profile){}

    render(){
        return (
            <div class="bg-black text-white">
                <div class="grid place-items-center h-screen">
                    <div>
                        <h1 class="text-center text-3xl mb-10">¿Quién esta viendo ahora?</h1>
                        <div class="">
                            {
                                this.state.profiles?.map((profile) => {
                                    return (
                                        <UserProfile
                                            name={ profile.name }
                                            image={ profile.img }
                                            link={ profile.link }
                                        />
                                    );
                                })
                            }

                            <AddProfile />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
