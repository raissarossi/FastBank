# Generated by Django 4.2 on 2023-05-12 17:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fastBank', '0003_cliente_cpf_cnpj_alter_cliente_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientepf',
            name='cpf',
        ),
        migrations.RemoveField(
            model_name='clientepj',
            name='cnpj',
        ),
    ]