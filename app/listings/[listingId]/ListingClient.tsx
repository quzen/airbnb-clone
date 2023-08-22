"use client";

import { Listing, Reservation, User } from "@prisma/client";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: Listing;
  currentUser: User | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  return <div></div>;
};

export default ListingClient;
