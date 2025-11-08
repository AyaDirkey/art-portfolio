// src/pages/AllPicturesPage.tsx
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const AllPicturesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter pictures based on the search term
  const filteredPictures = pictures.filter(pic =>
    pic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // You can wrap this in your main layout component
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">All Pictures</h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="form-control">
            <div className="input-group">
              <span>
                <FaSearch className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Search for a picture..."
                className="input input-bordered input-lg w-full max-w-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Pictures Grid */}
        {filteredPictures.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPictures.map((pic) => (
              <div
                key={pic.id}
                className="card bg-base-100 shadow-xl group cursor-pointer"
                // You can add an onClick here to open a modal/lightbox
              >
                <figure className="aspect-square overflow-hidden">
                  <img
                    src={pic.url}
                    alt={pic.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-lg">{pic.name}</h2>
                  {/* You can add more details here if you have them */}
                  {/* <p>{pic.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-16">
            <p className="text-xl">No pictures found matching "{searchTerm}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPicturesPage;