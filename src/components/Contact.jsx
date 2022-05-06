import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Contact = ({ teamContact }) => {
  const [company, setCompany] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const teamMember = teamContact.find(
      (member) => Number(member.id) === Number(+id)
    );
    setCompany(teamMember);
  }, [teamContact, id]);

  return (
    <>
      <section className="bg-white grid h-screen place-items-center">
        {company && (
          <section className="m-10 bg-[#cccccc]  text-black p-4 rounded w-4/5 md:text-center">
            <div className="text-5xl">
              <span className="font-bold "></span> {company.company.name}
            </div>

            <div className=" text-3xl">{company.company.catchPhrase}</div>

            <div className="text-2xl grid grid-cols-1 md:grid-cols-2 mt-3 place-items-center">
              <div className="text-left">
                <div className="mt-4">
                  <span className="font-bold">Liason Officer: </span>
                  {company.name}
                </div>
                <div>
                  <span className="font-bold">Email: </span> {company.email}
                </div>
              </div>

              <div className="text-left">
                <span className="font-bold"> Address:</span>{' '}
                {company.address.street}
                <div>
                  <span className="font-bold"> City: </span>{' '}
                  {company.address.city}
                </div>
                <div>
                  {' '}
                  <span className="font-bold"> Zipcode:</span>{' '}
                  {company.address.zipcode}
                </div>
                <div>
                  {' '}
                  <span className="font-bold">Phone: </span> {company.phone}
                </div>
                <div>
                  {' '}
                  <span className="font-bold"> Website: </span>{' '}
                  {company.website}
                </div>
              </div>
            </div>

            <div className="m-5">
              <Link
                to="/contacts"
                className="font-bold py-3 px-4 hover:bg-black hover:text-white text-black bg-white rounded-lg ">
                Back
              </Link>
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default Contact;
