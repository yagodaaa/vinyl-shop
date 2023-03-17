import React, { useState } from "react";

interface FormData {
    nameOfTheAlbum: string;
    nameOfTheArtist: string;
    price: number;
    yearOfPublishing: number;
}

const SellForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        nameOfTheAlbum: "Viva la Vida",
        nameOfTheArtist: "Coldplay",
        price: 200,
        yearOfPublishing: 2008
    })

    const handleSubmit: React.FormEventHandler<HTMLElement> = (event) => {
        event.preventDefault();
        //uzywamy tej funkcji, aby zapobiec automatycznemu wyslaniu odp na serwer, poniewaz
        //najpierw chcemy wykonac walidacje formularza.
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event)
        const { id, value } = event.target
        const newState = { ...formData, [id]: value }
        setFormData(newState);
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nameOfTheAlbum">Name of the album</label>
            <input id="nameOfTheAlbum" type="text" value={formData.nameOfTheAlbum} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="nameOfTheArtist">Name of the artist</label>
            <input id="nameOfTheArtist" type="text" value={formData.nameOfTheArtist} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input id="price" type="number" value={formData.price} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="yearOfPublishing">Year of Publishing</label>
            <input id="yearOfPublishing" type="number" value={formData.yearOfPublishing} onChange={handleChange} />
        </div>

        <button type="submit">Save</button>

    </form>
}
export default SellForm 