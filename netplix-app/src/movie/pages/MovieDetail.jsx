import React from 'react';

export class MovieDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie: {
                url: 'https://playerc.cuevana2.io/ir/bkRGMTVVMncvTUM0T0dYMmkwMUlmUlRyVjdpS0MwSlA3MGl4YnJ4TE1Ebz0/YlJYNDVJWld1aC9aNklBQmhTY3B3a25LTjR4VXFPVzVOelBXcE9xSFRrWENsVDZJQTdIWTJJb1pwVWNlcDFJWWRhQmpKWXFiQmE5RXdVWEZpck8yV0tpc2ZVMm5kR3NkUXVjUHNIWGtiUVk9/1653515329',
                age: '+18',
                public: 'Contiene violencia',
            }
        };
    }

    componentDidMount(){}

    handleClick(profile){}

    render(){
        return (
            <div class="bg-black text-white">
                <div class="grid place-items-center h-screen relative">
                    <div class="fixed top-5 left-5 text-xl p-4 bg-black shadow-lg rounded-sm shadow-black opacity-0 hover:opacity-90 z-100">
                        <div class="">
                            <a href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                Volver
                            </a>
                        </div>

                        <div class="border-l-[3px] border-red-800 py-2 px-3 mt-8">
                            <h4 class="mb-2">{this.state.movie.age}</h4>
                            <p>{this.state.movie.public}</p>
                        </div>
                    </div>
                    <iframe class="w-screen h-screen bg-white" src={this.state.movie.url} allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>
                </div>
            </div>
        );
    }
};
