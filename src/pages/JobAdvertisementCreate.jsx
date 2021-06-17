import React from "react";
import { Dropdown, Label, TextArea,Input, Grid } from "semantic-ui-react";

export default function JobAdvertisementCreate() {
  const jobOptions = [
    { key: "uç", value: "uç", text: "Uzaktan Çalışma" },
    { key: "iç", value: "iç", text: "İş Yerinde Çalışma" },
  ];

  const workTimeOptions = [
    { key: "1", value: "1", text: "Tam Zamanlı" },
    { key: "2", value: "2", text: "Yarı Zamanlı" },
  ];

  const cities = [
    { key: "51", value: "51", text: "Niğde" },
    { key: "52", value: "52", text: "Ordu" },
  ];

  const positions = [
    { key: "1", value: "1", text: "Software Developer" },
    { key: "2", value: "2", text: "Backend Developer" },
  ];
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
          <Label style={{ marginBottom: "1rem", marginRight: "43rem"}}>
        Çalışma Seçenekleri
      </Label>
      <Dropdown style={{width:"25rem"}} placeholder="State" fluid selection options={jobOptions} />
          </Grid.Column>
          <Grid.Column width={8}>
          <Label style={{marginBottom: "1rem", marginRight: "50rem" }}>
        Minimum Maaş
      </Label>
      <Input name="minSal" type="number" style={{marginRight: "50rem",width:"25rem"}}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
          <Label style={{ marginTop:"2rem",marginBottom: "1rem", marginRight: "41.4rem" }}>
        Çalışma Zamanı Özelliği
      </Label>
      <Dropdown style={{width:"25rem"}} placeholder="State" fluid selection options={workTimeOptions} />
          </Grid.Column>
          <Grid.Column width={8}>
          <Label style={{ marginTop:"2.7rem",marginBottom: "1rem", marginRight: "50rem" }}>
        Maksimum Maaş
      </Label>
      <Input name="maxSal" type="number" style={{marginRight: "50rem",width:"25rem"}}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
          <Label style={{ marginTop:"2rem",marginBottom: "1rem", marginRight: "45.3rem" }}>
        İlan Son Tarihi
      </Label>
      <Dropdown style={{width:"25rem"}} placeholder="State" fluid  selection search />
          </Grid.Column>
          <Grid.Column width={8}>
          <Label style={{ marginTop:"2rem",marginBottom: "1rem", marginRight: "50rem" }}>
        Açık Pozisyon Sayısı
      </Label>
      <Input name="numberOfOpenPos" type="number" style={{marginRight: "50rem",width:"25rem"}}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
          <Label style={{ marginTop:"2rem",marginBottom: "1rem", marginRight: "50rem" }}>
        Şehir
      </Label>
      <Dropdown style={{width:"25rem"}} placeholder="Şehir Seçiniz" fluid  selection search options={cities} />
          </Grid.Column>
          <Grid.Column width={8}>
          <Label style={{ marginTop:"0.4rem",marginBottom: "1rem", marginRight: "50rem" }}>
        Açık Pozisyon Sayısı
      </Label>
      <Input name="numberOfOpenPos" type="number" style={{marginRight: "50rem",width:"25rem"}}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
          <Label style={{ marginTop:"2rem",marginBottom: "1rem", marginRight: "50rem" }}>
        İş Pozisyonu
      </Label>
      <Dropdown style={{width:"25rem"}} placeholder="İş Pozisyonu" fluid  selection search options={positions} />
          </Grid.Column>
          <Grid.Column width={8}>
          <Label style={{ marginTop:"2rem",marginBottom: "1rem", marginRight: "50rem" }}>
        Açıklamalar
      </Label>
      <textarea placeholder="Açıklamalar" style={{marginRight: "50rem" , minHeight:"75px",width:"25rem"}} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}