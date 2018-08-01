import React from 'react';
//import TreeView from 'react-treeview';
import TreeView from '../TreeView';


const uUrl = "http://cfw.sarna.net/wiki/images/thumb/0/0a/Black_Widow_Company.jpg/407px-hpon77su2kjgcfg1o208k744am04i0b.png?timestamp=20161016184603";
const mUrl = "http://cfw.sarna.net/wiki/images/c/cf/Madcat.gif?timestamp=20061128211343"
const pUrl = "http://cfw.sarna.net/wiki/images/thumb/0/00/Jacob_Kincaid.jpg/120px-b9eviuckljm50r3ycx7khp6v0evia31.jpg?timestamp=20111102003555";

const OrganizationTab = ({units, mechs, pilots}) => {
  console.log(units, mechs, pilots);
  return (
  <div className="text-left">
      {units.map((unit) => (
        <TreeView key={unit._id} label={unit.name} imgUrl={uUrl} defaultCollapsed={false}>
          {mechs.map(mech => (
            <div key={mech._id} className="ml-5">
              <TreeView key={mech._id} label={mech.name + " - " + mech.model} imgUrl={mUrl} defaultCollapsed={false}>
                {pilots.map(pilot => 
                  pilot.mech._id === mech._id &&
                (
                  <div key={pilot._id} className="ml-5">
                  <TreeView key={pilot._id} label={pilot.name} imgUrl={pUrl}>
                    <div className="ml-3">Age: {pilot.age}</div>
                    <div className="ml-3">Rank: {pilot.rank}</div>
                  </TreeView>
                  </div>
                ))}
              </TreeView>

           </div>
            ))}
        </TreeView>
      ))}
  </div>
)}

export default OrganizationTab;