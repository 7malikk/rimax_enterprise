import React from 'react';
import { Link } from 'react-router-dom';
const Contacts = ({ teamsContact }) => {
  return (
    <>
      <div>
        <h3 className="text-4xl font-semibold text-center">Our Teams</h3>
      </div>
      <div className="teamDiv grid grid-cols-1 gap-5 md:grid-cols-3 place-items-center my-3 p-4">
        {teamsContact.map((teamMember) => (
          <div
            className="memberCard  p-2 bg-[#cccccc] shadow-2xl rounded-md w-4/5 md:w-full md:h-full"
            key={teamMember.id}>
            <Link to={`/contact/${teamMember.company.name}/${teamMember.id}`}>
              <div className="card">
                <div className="companyDetails">
                  <div className="name text-3xl font-bold">
                    {teamMember.company.name}
                  </div>
                  <div className="flex pt-4 flex-col align-baseline text-left">
                    <div className="catchPhrase">
                      <span className="font-bold">Motto: </span>{' '}
                      {teamMember.company.catchPhrase}
                    </div>
                    <div className="locationDiv ">
                      <span className="font-bold"> Address: </span>
                      <span>{teamMember.address.street}</span>{' '}
                      <span>{teamMember.address.city}</span>{' '}
                      <span>{teamMember.address.zipcode}</span>
                    </div>
                    <div className="number">
                      <span className="font-bold"> Phone: </span>{' '}
                      {teamMember.phone}
                    </div>
                    <div className="website">
                      <span className="font-bold">Website: </span>{' '}
                      {teamMember.website}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacts;
