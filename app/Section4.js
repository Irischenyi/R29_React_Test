import React from 'react';
class Section4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ifdataget: false,
            allblock: [],
        };
    }
    traits() {
        const all = {
            traits: [],
            person: '',
        };
        const beforetraits = this.props.trait.map(item => {
            return {
                name: item.name,
                bool: item.bool,
            };
        });
        if (this.props.person === 'surprise me') {
            beforetraits.forEach((item, index) => {
                if (item.bool) item.bool = false;
            });
            let truelength = 0;
            while (truelength < 3) {
                truelength = 0;
                beforetraits[Math.floor(Math.random() * (this.props.trait.length - 1))].bool = true;
                beforetraits.forEach(item => {
                    if (item.bool) truelength = truelength + 1;
                });
            }
            all.person = this.props.persons[Math.floor(Math.random() * (this.props.persons.length - 1))];
            all.traits = beforetraits;
        } else {
            all.traits = beforetraits;
            all.person = this.props.person;
        }
        this.props.onClick(4, all.person, all.traits, 0);

        return all;
    }
    data() {
        const url = 'https://cdn.contentful.com/spaces/gju6m3ezaxar/entries?content_type=jsonFull&include=10&limit=200&access_token=e887c7cd3298dd5e14cce7cd22523670abea9de380aef548efcbcb4b3a612ee9';
        fetch(url).then(response => response.json())
          .then(data => {
              const datas = data.items[0].fields.jsonFull.feed.entry;
              const arry = [];
              const traits = this.traits();
              datas.forEach(item => {
                  if (item.gsx$person.$t === traits.person) {
                      traits.traits.forEach(items => {
                          if (items.bool) {
                                if (item.gsx$trait.$t === items.name) {
                                    arry.push(
                                            item
                                        );
                                }
                          }
                      });
                  }
              });
              this.setState({
                  allblock: arry,
                  ifdataget: true,
              });
          })
          .catch(e => console.log('error', e));
    }
    render() {
        let showall = [<img key = '1' className="imga" src='../imgs/frame4/loading.gif'/>];
        if (!this.state.ifdataget) {
            this.data();
        } else {
            const divshow = [];
            this.state.allblock.forEach((item, index) => {
                divshow.push();
                divshow.push(
                        <div className="item" key ={index}>
                            <div className="img"><img src={item.gsx$image.$t}></img></div>
                            <div className="titlebox">
                                <div className="divs">{item.gsx$itemname.$t}</div>
                                <div className="divs">
                                    {item.gsx$description70charactersmax.$t}
                                </div>
                                <div className="divs">{item.gsx$price.$t}</div>
                            </div>
                        </div>
                );
            });

            showall = divshow;
        }

        return (
            <div className="frame4">
                <div onClick = {() => this.props.onClick(1, 0)}>refresh</div>
                {showall}
            </div>
        );
    }
}
export default Section4;
