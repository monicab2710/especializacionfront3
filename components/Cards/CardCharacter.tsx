import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export interface CardCharacterProperties {
    name: string;
    description: string;
    image: string;
    id: number,
}

export default function CardCharacter({ name, description, image, id }: CardCharacterProperties) {
    return (
        <Card sx={{ maxWidth: 346 }}>
            <CardMedia sx={{ height: 300 }}
                image={image}
                title={`${name} image`} />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {description === ''
                        ? " Ups.. no description available. "
                        : description
                    }
                </Typography>
            </CardContent>
        </Card>

    )
}