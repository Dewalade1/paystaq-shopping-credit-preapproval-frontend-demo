import WifiOffRoundedIcon from '@material-ui/icons/WifiOffRounded';

const NetworkError = () => {
  return (
    <div className="mt-6 alert alert-danger text-center shadow-sm">
      <WifiOffRoundedIcon />
      <p>Oops!! Seems we can't access our feed.</p>
      <p> Kindly check your network connection</p>
    </div>
  );
}
