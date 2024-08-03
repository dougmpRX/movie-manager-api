import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  title: string;

  @Column()
  releaseDate: string;

  @Column()
  movieUrl: string;

  @Column()
  imageUrl: string;

  @Column()
  thumbnailUrl: string;

  @Column()
  actor: string;

  @Column()
  isDownloaded: boolean;
}
