export const RefreshPage = () => {

    //DO NOT just put the reload() 
    //in the onClick.
    //It will start a never ending render loop
    const refresh = () => {
        window.location.reload();
    }
    
    return(
        <div className="refresh">
            <button className="button" onClick={refresh}>Reset Page</button>
        </div>
    );
}