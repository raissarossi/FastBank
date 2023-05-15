# Generated by Django 4.2 on 2023-05-12 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fastBank', '0002_rename_nomesocial_cliente_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='CPF_CNPJ',
            field=models.CharField(default=1, max_length=25, unique=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='cliente',
            name='username',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]