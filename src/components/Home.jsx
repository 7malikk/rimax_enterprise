import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ teams }) => {
  return (
    <>
      <section className="outerSection font-sans">
        {teams && (
          <section className="innerSection">
            <section className="briefDetailSection bg-[url('https://bit.ly/3sh0YM6')] bg-cover h-4/5 p-10 text-center bg-no-repeat  text-white ">
              <div className="briefDetails lg:text-black grid place-items-center h-screen lg:w-1/2 lg:m-auto md:m-auto md:w-2/3 content-center ">
                <div>
                  <h3 className="text-3xl">
                    <span className="italic font-bold md:text-5xl">
                      Rimax Enterprise
                    </span>{' '}
                  </h3>
                  <p className="md:text-2xl font-semibold">
                    At Rimax, our goal is to be the provide a pool of solutions
                    in all facets of the information technology industry
                  </p>
                </div>
                <button
                  className="lg:text-white mt-5 border-2 rounded-lg p-2 hover:border-black hover:text-black hover:bg-white lg:hover:text-black bg-black"
                  type="button">
                  <Link to={'/about'}>About Us</Link>
                </button>
              </div>
            </section>
            <section className="teamSection text-center p-3 bg-white">
              <div>
                <h3 className="text-4xl font-semibold">Our Teams</h3>
                <h5 className="text-2xl">
                  Here are some of our esteemed subcompanies:
                </h5>
              </div>
              <div className="teamDiv grid grid-cols-1 gap-5 md:grid-cols-3 place-items-center my-3">
                {teams.map((teamMember) => (
                  <div
                    className="memberCard  p-2 bg-[#cccccc] shadow-2xl rounded-md w-4/5 md:w-full md:h-full"
                    key={teamMember.id}>
                    <Link
                      to={`/contact/${teamMember.company.name}/${teamMember.id}`}>
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
            </section>
          </section>
        )}
      </section>
    </>
  );
};

export default Home;
