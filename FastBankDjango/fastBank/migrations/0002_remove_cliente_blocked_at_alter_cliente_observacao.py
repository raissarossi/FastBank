# Generated by Django 4.2 on 2023-06-02 01:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fastBank', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cliente',
            name='blocked_at',
        ),
        migrations.AlterField(
            model_name='cliente',
            name='observacao',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
