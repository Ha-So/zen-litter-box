import Script from "next/script";

const Coffee = () => {
  return (
    <div>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="harissocool"
        data-description="Support me on Buy me a coffee!"
        data-message="Meow"
        data-color="#FF813F"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      />
      {/* <Script src="https://third-party-script.js"></Script> */}
    </div>
  );
};

export default Coffee;
