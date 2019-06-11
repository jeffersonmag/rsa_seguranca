program pjRSA_SEG;

uses
  Vcl.Forms,
  rsa_webs in 'rsa_webs.pas' {Form1};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TForm1, Form1);
  Application.Run;
end.
