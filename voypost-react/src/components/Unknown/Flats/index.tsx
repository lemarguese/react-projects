import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useUser } from 'reactfire';
import { onSnapshot, collection } from 'firebase/firestore';
import GooglePlacesAutocomplete, {
  getLatLng,
  geocodeByAddress,
} from 'react-google-places-autocomplete';
import { useHistory, useLocation } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Sidebar from '../HomeScreen/images/sidebar.svg';
import { logout } from '../../../common/firebaseAuth';
import { IHotel } from './hotel';
import { db } from '../../../common/firebaseApp';
import Image from './images/hotel-photo.png';

const Flats: React.FC = () => {
  const { data: user } = useUser();
  const history = useHistory();

  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const [isFind, setIsFind] = useState(false);
  const initFlat = useRef<Array<IHotel>>();
  const [hotels, setHotels] = useState<Array<IHotel>>();
  const [modal, setModal] = useState(false);

  const { search } = useLocation();
  const modalHandler = () => {
    setModal(!modal);
  };
  const [userCredentials, setUserCredentials] = useState('');

  const [value, setValue] = useState('');

  useEffect(() => {
    onSnapshot(collection(db, 'flats'), (res) => {
      let flat: IHotel = {
        city: '',
        price: 0,
        dayType: '',
        content: '',
        photoUrl: '',
      };
      initFlat.current = res.docs
        .map((doc) => {
          const { city, price, dayType, content, photoUrl } = doc.data();
          flat = {
            city,
            price,
            dayType,
            content,
            photoUrl,
          };
          return flat;
        })
        .slice(0, 21);
      setHotels(
        decodeURIComponent(search)
          ? initFlat.current?.filter(
              (el) => el.city === decodeURIComponent(search).slice(1),
            )
          : initFlat.current,
      );
    });
    let credential = '';
    user?.displayName?.split(' ').forEach((el) => {
      credential += el[0].toUpperCase();
    });
    setUserCredentials(credential);
  }, [location, search, user?.displayName, value]);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="100%"
        height="100vh"
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <Box
          width="100%"
          height="100%"
          sx={{ position: 'absolute', zIndex: '0' }}
        />
        <Box
          sx={{
            width: '100%',
            height: 60,
            backgroundColor: '#F50057',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'fixed',
            zIndex: '99',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                background: `url(${Sidebar}) no-repeat center`,
                width: 30,
                height: 30,
                marginLeft: '20px',
              }}
            />
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '20px',
                marginLeft: '20px',
              }}
            >
              Voypost
            </Typography>
          </Box>
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: '#c4c4c4',
              borderRadius: '50%',
              marginRight: '20px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={modalHandler}
          >
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '22px',
              }}
            >
              {userCredentials || 'U'}
            </Typography>
          </Box>
          {modal ? (
            <Button
              sx={{
                width: 100,
                height: 40,
                backgroundColor: '#FFF',
                boxShadow: '0 0 10px #c4c4c4',
                position: 'absolute',
                top: 60,
                right: 5,
              }}
              onClick={logout}
            >
              Logout
            </Button>
          ) : null}
        </Box>
        <Box
          sx={{
            width: '45%',
            paddingLeft: '20px',
            marginTop: '150px',
          }}
        >
          <Box
            position="fixed"
            zIndex="99"
            top="80px"
            width="45%"
            component="form"
          >
            <GooglePlacesAutocomplete
              selectProps={{
                value,
                onChange: async (event: any) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  const res = await geocodeByAddress(event?.label);
                  const { lat, lng } = await getLatLng(res[0]);
                  setLocation({ lat, lng });
                  console.log(location.lat, location.lng);
                  const filteredHotels = initFlat.current?.filter(
                    (e) => e.city === event?.label,
                  );
                  setIsFind(true);
                  history.push(`/flats?${event?.label}`);
                  setHotels(filteredHotels);
                  setValue(event);
                },
                styles: {
                  input: (style: any) => ({
                    ...style,
                    appearance: 'none',
                  }),
                },
                placeholder: 'City',
              }}
            />
          </Box>
          <Box>
            <Typography variant="h3" sx={{ margin: '20px 0' }}>
              Flats to rent
            </Typography>
          </Box>
          {hotels?.map((el, i) => {
            return (
              <Box
                height="240px"
                /* eslint-disable-next-line react/no-array-index-key */
                key={i}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  boxShadow:
                    '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
                  marginBottom: '50px',
                  borderRadius: '4px',
                }}
              >
                <Box
                  sx={{
                    background: `url(${Image}) no-repeat center`,
                    width: '50%',
                    height: '100%',
                    borderBottomLeftRadius: '4px',
                    borderTopLeftRadius: '4px',
                    backgroundSize: 'cover',
                  }}
                />
                <Box
                  width="50%"
                  height="100%"
                  sx={{
                    margin: '0 20px 0 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ marginTop: '30px' }}>
                    <Typography variant="h5" marginBottom="10px">
                      ${el.price}/{el.dayType}
                    </Typography>
                    <Typography sx={{ color: '#00000080' }} marginBottom="10px">
                      {el.city}
                    </Typography>
                    <Typography fontSize="12px">{el.content}</Typography>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        backgroundColor: '#F5005714',
                        color: '#F50057',
                        marginBottom: '15px',
                      }}
                    >
                      Details
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        {isFind ? (
          <GoogleMapReact
            style={{ width: '50%', position: 'relative', marginLeft: '5%' }}
            center={{
              lat: location.lat,
              lng: location.lng,
            }}
            defaultZoom={7}
          />
        ) : (
          <Box
            width="52.5%"
            position="fixed"
            right="0"
            top="60px"
            height="100%"
            marginLeft="2.5%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: '#BDBDBD' }}
          >
            <Typography fontSize="20px" color="#FFF">
              No flat selected
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Flats;
